import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { MessagePipe } from 'src/app/pipes/message/message-pipe';
import { ChatEngineService } from 'src/app/service/chat-engine/chat-engine.service';
import { IONIC_COMPONENTS } from 'src/app/shared/shared-component';

@Component({
  selector: 'app-chat-selection',
  templateUrl: './chat-selection.component.html',
  styleUrls: ['./chat-selection.component.scss'],
  imports: [IONIC_COMPONENTS, MessagePipe],
})
export class ChatSelectionComponent {
  selectionItems: any;
  public chatMessage = input({});
  @Output() submit = new EventEmitter<string>();

  constructor(private engine: ChatEngineService) {
    this.selectionItems = this.engine.getCurrentQuestion()?.props;
  }

  send(value: any) {
    this.submit.emit(value);
  }
}
