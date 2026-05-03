import { Injectable, signal, WritableSignal } from '@angular/core';
import { Flow, InputTypes, Message, Question } from 'src/app/models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class ChatEngineService {
  private flow!: Flow;
  private currentQuestion!: Question;
  private questionMap = new Map<string, Question>();
  private state: WritableSignal<any> = signal(null);

  messages: Message[] = [];
  presentInput: boolean = false;

  /**
   * Initializes chat flow
   * @param flow
   * @returns
   */
  init(flow: Flow) {
    this.flow = flow;
    this.messages = [];
    this.questionMap = new Map(
      flow.questions.map((question) => [question.questionId, question]),
    );

    this.currentQuestion = this.flow.questions[0];
    this.pushQuestion(this.currentQuestion.text);

    return this.currentQuestion;
  }

  /**
   * Handles user answer
   * @param value
   * @returns
   */
  answer(value: string, text?: string) {
    if (!value.trim()) return;
    this.pushAnswer(text ?? value);
    const newAnswer = {
      [this.currentQuestion.name as string]: {
        value,
        text: text ?? value,
      },
    };

    this.state.update((item) => ({
      ...item,
      ...newAnswer,
    }));

    this.presentInput = false;
  }

  /**
   * Handles chat next flow
   * @returns Question | null
   */
  async next(next?: string): Promise<Question | null> {
    if (!this.currentQuestion?.next && !next) return null;

    const nextId = this.currentQuestion.next ?? next;
    const nextQuestion = this.questionMap.get(nextId as string);
    console.log(nextQuestion);
    if (!nextQuestion) return null;

    this.currentQuestion = nextQuestion;

    await this.delay(800);

    if (this.currentQuestion.text) {
      this.pushQuestion(this.currentQuestion.text);
    }

    if (Object.values(InputTypes).includes(this.currentQuestion.type)) {
      await this.delay(800);
      this.presentInput = true;
    }

    this.autoAdvance();
    return this.currentQuestion;
  }

  getCurrentQuestion(): Question | null {
    return this.currentQuestion;
  }

  async autoAdvance(): Promise<Question | null> {
    while (this.currentQuestion?.type === 'text') {
      const nextQuestion = await this.next();
      return nextQuestion;
    }

    return null;
  }

  private pushQuestion(text: string) {
    this.messages.push({ from: 'question', message: text });
  }

  private pushAnswer(answer: string) {
    this.messages.push({ from: 'answer', message: answer });
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public replaceVariables(text: string): string {
    const regex = /\{\{(.*?)\}\}/g;
    return text.replace(regex, (_, key) => {
      return this.state()[key.trim()]?.text || '';
    });
  }
}
