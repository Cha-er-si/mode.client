export interface Question {
  questionId: string;
  type: string;
  name?: string;
  text: string;
  placeholder?: string;
  next?: string;
  props?: any[];
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
