import type { BaseIDType } from '../types';

export type BanquetQuizAnswerType = {
  label: string;
  answer?: boolean;
};

export type BanquetQuizType = BaseIDType & {
  question: string;
  options: BanquetQuizAnswerType[];
};
