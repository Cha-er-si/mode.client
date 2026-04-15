import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusinessHeaderComponent } from 'src/app/components';
import { Flow, Question } from 'src/app/models/chat.model';
import chatFlow from './document-request.json';
import chatMessage from './document-request.messages.json';
import { MessagePipe } from 'src/app/pipes/message/message-pipe';
import { IONIC_COMPONENTS } from 'src/app/shared/shared-component';

@Component({
  selector: 'app-document-request',
  templateUrl: './document-request.page.html',
  styleUrls: ['./document-request.page.scss'],
  standalone: true,
  imports: [
    ...IONIC_COMPONENTS,
    CommonModule,
    FormsModule,
    BusinessHeaderComponent,
    MessagePipe,
  ],
})
export class DocumentRequestPage implements OnInit {
  didPageLoad: boolean = false;
  chatMessages: any = signal(chatMessage);
  chatQuestions: Flow = chatFlow as Flow;
  chatHistory: Question[] = [];
  currentQuestion!: string;
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadQuestions();
    this.didPageLoad = true;
  }

  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  async loadQuestions() {
    const questions: Question[] = this.chatQuestions.questions;
    for (let question of questions) {
      if (question.type === 'text') {
        this.chatHistory.push(question);

        await this.delay(1000);
      } else {
        this.chatHistory.push(question);
        break;
      }
    }
  }
}
