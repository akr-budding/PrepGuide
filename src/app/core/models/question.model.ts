export type Difficulty = 'easy' | 'med' | 'hard';

export interface Question {
  id?: string;
  q: string;
  tag: Difficulty;
  say: string;
  note: string;
  mem: string;
  code?: string;
}

export interface Topic {
  key: string;
  label: string;
  icon: string;
  tip: string;
  questions: Question[];
}

export interface SearchResult {
  question: Question;
  topicKey: string;
  topicLabel: string;
}
