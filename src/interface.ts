export interface IConfig {
  questions: IData[];
}

export interface IData {
  question: string;
  answers: IAnswer[];
  revealed?: boolean;
  numberOfAttempt?: number;
}

export interface IAnswer {
  content: string;
  correct: boolean;
  selected?: boolean;
}