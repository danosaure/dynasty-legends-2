import { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { PaperWrapper } from '../shared';
import { BANQUET_QUIZ } from './data';
import { BanquetQuizQuestion } from './Question';
import type { BanquetQuizType } from './types';

const NUMBER_OF_QUESTIONS = BANQUET_QUIZ.length;

const getRandomQuestion = () => BANQUET_QUIZ[Math.floor(Math.random() * NUMBER_OF_QUESTIONS)];

export const BanquetQuizQuestionnaire = () => {
  const [selected, setSelected] = useState<string>('');
  const [question, setQuestion] = useState<BanquetQuizType>(getRandomQuestion());
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const onAnswerSelected = (label: string) => {
    setSelected(label);
    setTotalQuestions(totalQuestions + 1);

    if (question.options.find((option) => option.label === label)?.answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const nextQuestion = () => {
    setSelected('');
    setQuestion(getRandomQuestion());
  };

  let stats = <Typography>Answer at least one question to get statistics</Typography>;
  if (totalQuestions) {
    stats = (
      <Typography>
        {correctAnswers}/{totalQuestions} ({Math.floor((correctAnswers / totalQuestions) * 100)}%)
      </Typography>
    );
  }

  return (
    <PaperWrapper sx={{ p: 3 }}>
      <Grid container spacing={2} direction="column">
        <BanquetQuizQuestion question={question} onAnswerSelected={selected ? () => {} : onAnswerSelected} selected={selected} />
        {stats}
        <Button onClick={() => nextQuestion()} variant="outlined" disabled={!selected}>
          Next Question
        </Button>
      </Grid>
    </PaperWrapper>
  );
};
