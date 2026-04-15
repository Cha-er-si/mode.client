import { Injectable } from '@angular/core';
import { Flow, Question } from 'src/app/models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class ChatEngineService {
  private flow!: Flow;
  private messages: any;

  private currentQuestionId!: string;
  private data: Record<string, any> = {};

  init(flow: Flow, messages: any) {
    this.flow = flow;
    this.messages = messages;
    this.currentQuestionId = this.flow.questions[0].questionId;
  }

  getCurrentQuestion(): Question | undefined {
    return this.flow.questions.find(
      (question) => question.questionId === this.currentQuestionId,
    );
  }

  getChatMessage(question: Question): string {
    return this.messages[question.text];
  }

  next(input?: string): Question | undefined {
    const question: Question | undefined = this.getCurrentQuestion();
    if (!question) {
      return;
    }

    this.currentQuestionId = question.next!;
    return this.getCurrentQuestion();
  }
}
