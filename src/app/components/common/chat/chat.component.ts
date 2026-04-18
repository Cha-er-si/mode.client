import { Component, input, InputSignal, OnInit } from '@angular/core';
import { Flow, Question } from 'src/app/models/chat.model';
import { ChatEngineService } from 'src/app/service/chat-engine/chat-engine.service';
import { CommonModule } from '@angular/common';
import { IONIC_COMPONENTS } from 'src/app/shared/shared-component';
import { MessagePipe } from 'src/app/pipes/message/message-pipe';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [...IONIC_COMPONENTS, CommonModule, MessagePipe],
})
export class ChatComponent implements OnInit {
  public chatFlow: InputSignal<Flow> = input({} as Flow);
  public chatMessage = input({});
  currentQuestion!: Question | null;
  constructor(public engine: ChatEngineService) {}

  ngOnInit() {
    this.currentQuestion = this.engine.init(this.chatFlow());
    this.engine.autoAdvance();
  }
}
