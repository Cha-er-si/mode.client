import { Component, input, InputSignal, OnInit } from '@angular/core';
import { Flow, Question } from 'src/app/models/chat.model';
import { ChatEngineService } from 'src/app/service/chat-engine/chat-engine.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  flow: InputSignal<Flow> = input<Flow>({} as Flow);
  messages: InputSignal<any> = input<any>({});
  chatHistory: { text: string; from: 'bot' | 'user' }[] = [];
  currentInput = '';
  currentQuestion!: Question;

  constructor(private engine: ChatEngineService) {}

  ngOnInit() {
    this.engine.init(this.flow() as Flow, this.messages);
    this.processQuestions();
  }

  processQuestions() {
    const question = this.engine.getCurrentQuestion();
    if (!question) return;

    this.currentQuestion = question;

    const message = this.engine.getChatMessage(question);

    // show bot message
    this.chatHistory.push({ text: message, from: 'bot' });

    // auto-advance if text only
    if (question.type === 'text') {
      setTimeout(() => {
        this.engine.next();
        this.processQuestions();
      }, 500);
    }
  }

  submit() {
    if (!this.currentInput.trim()) return;

    // show user message
    this.chatHistory.push({ text: this.currentInput, from: 'user' });

    this.engine.next(this.currentInput);
    this.currentInput = '';

    this.processQuestions();
  }
}
