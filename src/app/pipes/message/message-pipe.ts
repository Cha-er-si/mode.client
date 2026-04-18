import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message',
})
export class MessagePipe implements PipeTransform {
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

    return (
      (messages as Record<string, string>)[key] ?? `Missing message for ${key}`
    );
  }
}
