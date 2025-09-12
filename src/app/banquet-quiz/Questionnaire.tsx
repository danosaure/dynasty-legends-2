import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../shared';
import { BANQUET_QUIZ } from './data';
import { BanquetQuizQuestion } from './Question';
import type { BanquetQuizType } from './types';
import { LeitnerSystem } from '../../libs';

export const BanquetQuizQuestionnaire = () => {
  const [selected, setSelected] = useState<string>('');
  const [question, setQuestion] = useState<BanquetQuizType>();
  const [leitner, setLeitner] = useState<LeitnerSystem<BanquetQuizType> | null>(null);
  const [questionGenerator, setQuestionGenerator] = useState<Generator<BanquetQuizType | undefined>>();

  useEffect(() => {
    // TODO: fetch data from persistence.

    const questionnaire = new LeitnerSystem<BanquetQuizType>(BANQUET_QUIZ, 0);
    setLeitner(questionnaire);

    const generator = questionnaire.questions();
    setQuestionGenerator(generator);

    const questionIteration = generator.next();
    setQuestion(questionIteration.value);
  }, []);

  const onAnswerSelected = (label: string) => {
    setSelected(label);
    if (question) {
      const correct = question.options.find((option) => option.label === label)?.answer;
      leitner?.rebox(question.id, correct ?? false);
    }
  };

  const nextQuestion = () => {
    setSelected('');
    if (questionGenerator) {
      const questionIteration = questionGenerator.next();
      if (questionIteration.done) {
        console.log('DONE QUESTIONNAIRE...');
      } else {
        setQuestion(questionIteration.value);
      }
    }
  };

  if (!leitner || !question) {
    return null;
  }

  const leitnerStats = leitner.stats();

  console.log('leitnerStats=', leitnerStats);

  let percentJSX = null;
  if (leitnerStats.answered) {
    percentJSX = (
      <>
        Results: {leitnerStats.correct}/{leitnerStats.answered} ({leitnerStats.percent}%)
      </>
    );
  }

  return (
    <PaperWrapper sx={{ p: 3 }}>
      <Grid container spacing={2} direction="column">
        <BanquetQuizQuestion question={question} onAnswerSelected={selected ? () => {} : onAnswerSelected} selected={selected} />
        <Grid container>
          <Grid size={{ xs: 6 }}>
            Progress: {leitnerStats.questionIndex ?? 0 + 1}/{leitnerStats.currentDeckSize}
          </Grid>
          <Grid size={{ xs: 6 }}>{percentJSX}</Grid>
        </Grid>
        <Button onClick={() => nextQuestion()} variant="outlined" disabled={!selected}>
          Next Question
        </Button>
      </Grid>
    </PaperWrapper>
  );
};
