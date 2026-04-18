import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagePipe } from 'src/app/pipes/message/message-pipe';
import { IONIC_COMPONENTS } from 'src/app/shared/shared-component';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
  imports: [...IONIC_COMPONENTS, FormsModule],
})
export class ChatInputComponent {
  @Input() placeholder: string | undefined = '';
  @Output() submit = new EventEmitter<string>();

  value = '';

  constructor() {}

  send() {
    if (!this.value.trim()) return;

    this.submit.emit(this.value);
    this.value = '';
  }
}
