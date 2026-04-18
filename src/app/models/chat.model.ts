export interface Question {
  questionId: string;
  type: string;
  text: string;
  placeholder?: string;
  next?: string;
}

export interface Flow {
  questions: Question[];
}

export interface Message {
  from: 'question' | 'answer';
  message: string;
}

export enum InputTypes {
  'input',
  'selection',
  'date',
  'pin',
  'tel',
}