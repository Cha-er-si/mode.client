import {
  AfterViewChecked,
  Component,
  computed,
  input,
  InputSignal,
  model,
  ModelSignal,
  OnInit,
  WritableSignal,
} from '@angular/core';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { Question } from 'src/app/models/chat.model';
import { ChatEngineService } from 'src/app/service/chat-engine/chat-engine.service';
import { MessagePipe } from 'src/app/pipes/message/message-pipe';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss'],
  imports: [ChatInputComponent],
})
export class ChatFooterComponent implements AfterViewChecked {
  currentQuestion: Question | null = null;
  placeholderTexts = input({});
  processedPlaceholder: string = '';
  constructor(
    public engine: ChatEngineService,
    private messagePipe: MessagePipe,
  ) {}

  ngAfterViewChecked() {
    this.currentQuestion = this.engine.getCurrentQuestion();
    this.processedPlaceholder = this.messagePipe.transform(
      this.currentQuestion?.placeholder,
      this.placeholderTexts(),
    );
  }

  onAnswer(value: string) {
    this.engine.answer(value);
    this.engine.next();

    this.engine.autoAdvance();
  }
}
