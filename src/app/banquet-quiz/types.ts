export type BanquetQuizAnswerType = {
  label: string;
  answer?: boolean;
};

export type BanquetQuizType = {
  question: string;
  options: BanquetQuizAnswerType[];
};
