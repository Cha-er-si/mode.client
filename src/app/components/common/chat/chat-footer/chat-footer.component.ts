import { AfterViewChecked, Component, input } from '@angular/core';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { Question } from 'src/app/models/chat.model';
import { ChatEngineService } from 'src/app/service/chat-engine/chat-engine.service';
import { MessagePipe } from 'src/app/pipes/message/message-pipe';
import { ChatSelectionComponent } from '../chat-selection/chat-selection.component';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss'],
  imports: [ChatInputComponent, ChatSelectionComponent],
})
export class ChatFooterComponent implements AfterViewChecked {
  currentQuestion: Question | null = null;
  placeholderTexts = input({});
  processedPlaceholder: string = '';
  public chatMessage = input({});

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

  onAnswer(answer: any) {
    if (typeof answer === 'string') {
      this.engine.answer(answer);
      this.engine.next();
    } else {
      this.engine.answer(
        answer.value,
        this.messagePipe.transform(answer.text, this.chatMessage()),
      );
      this.engine.next(answer.next);
    }

  }
}
