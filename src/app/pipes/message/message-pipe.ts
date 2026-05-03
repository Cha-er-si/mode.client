import { Pipe, PipeTransform } from '@angular/core';
import { ChatEngineService } from 'src/app/service/chat-engine/chat-engine.service';

@Pipe({
  name: 'message',
})
export class MessagePipe implements PipeTransform {
  constructor(private engine: ChatEngineService) {}
  transform(
    key: string | null | undefined,
    messages: Record<string, string> | null | unknown,
    isAnswer?: boolean,
  ): string {
    if (!key) return '404';
    if (!messages) return '404';

    if (isAnswer) {
      return key;
    }

    const chatMessage = (messages as Record<string, string>)[key];
    const hasDynamicText = /\{\{(.*?)\}\}/g.test(chatMessage);

    if (hasDynamicText) {
      return this.engine.replaceVariables(chatMessage);
    }

    return (
      (messages as Record<string, string>)[key] ?? `Missing message for ${key}`
    );
  }
}
