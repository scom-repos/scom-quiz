export interface IConfig {
  questions: IData[];
}

export interface IData {
  question: string;
  answer: IAnswer[];
  revealed?: boolean;
}

export interface IAnswer {
  content: string;
  correct: boolean;
  selected?: boolean;
}