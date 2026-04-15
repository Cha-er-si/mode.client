export interface Question {
  questionId: string;
  type: string;
  text: string;
  next?: string;
}

export interface Flow {
  questions: Question[];
}
