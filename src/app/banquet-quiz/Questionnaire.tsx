import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { PaperWrapper } from '../shared';
import { BANQUET_QUIZ } from './data';
import { BanquetQuizQuestion } from './Question';
import type { BanquetQuizType } from './types';
import Typography from '@mui/material/Typography';
import { LeitnerSystem, type LeitnerBox, type LeitnerBoxes } from '../../libs/leitner-system';

export const BanquetQuizQuestionnaire = () => {
  const [selected, setSelected] = useState<string>('');
  const [question, setQuestion] = useState<BanquetQuizType>();
  const [leitner, setLeitner] = useState<LeitnerSystem<BanquetQuizType> | null>(null);
  const [questionGenerator, setQuestionGenerator] = useState<Generator<BanquetQuizType | undefined>>();
  const [isSessionDone, setIsSessionDone] = useState<boolean>(false);

  const initializeSession = (sessionId: number, boxes: LeitnerBoxes, retiredDeck: LeitnerBox) => {
    const questionnaire = new LeitnerSystem<BanquetQuizType>(BANQUET_QUIZ, sessionId, boxes, retiredDeck);
    setLeitner(questionnaire);

    const generator = questionnaire.questions();
    setQuestionGenerator(generator);

    const questionIteration = generator.next();
    setQuestion(questionIteration.value);
  };

  useEffect(() => {
    // TODO: fetch data from persistence.
    initializeSession(0, [[], [], [], [], [], [], [], [], [], []], []);
  }, []);

  const onAnswerSelected = (label: string) => {
    setSelected(label);
    if (question) {
      const correct = question.options.find((option) => option.label === label)?.answer;
      leitner?.rebox(question.id, correct ?? false);
    }
    setIsSessionDone(leitnerStats.questionIndex === leitnerStats.currentDeckSize);
  };

  const nextQuestion = () => {
    setSelected('');
    if (questionGenerator) {
      const questionIteration = questionGenerator.next();
      if (questionIteration.done) {
        setIsSessionDone(true);
      } else {
        setQuestion(questionIteration.value);
      }
    }
  };

  const startNextSession = () => {
    initializeSession((leitnerStats.sessionId as number) + 1, leitnerStats.boxes, leitnerStats.retiredDeck);
    setIsSessionDone(false);
    setSelected('');
  };

  if (!leitner) {
    return null;
  }

  const leitnerStats = leitner.stats();

  // console.log('leitnerStats=', JSON.stringify(leitnerStats, null, 2));

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
        {question ? (
          <BanquetQuizQuestion question={question} onAnswerSelected={selected ? () => {} : onAnswerSelected} selected={selected} />
        ) : (
          <Typography color="warning">No questions for this session.</Typography>
        )}
        <Grid container>
          <Grid size={{ xs: 4 }}>Session: {leitnerStats.sessionId + 1}</Grid>
          <Grid size={{ xs: 4 }}>
            Progress: {leitnerStats.questionIndex ?? 0 + 1}/{leitnerStats.currentDeckSize}
          </Grid>
          <Grid size={{ xs: 4 }}>{percentJSX}</Grid>
        </Grid>
        {isSessionDone || !question ? (
          <>
            <Typography color="success">Session completed.</Typography>
            <Button onClick={() => startNextSession()} variant="contained">
              Start Next Session
            </Button>
          </>
        ) : (
          <Button onClick={() => nextQuestion()} variant="outlined" disabled={!selected}>
            Next Question
          </Button>
        )}
      </Grid>
    </PaperWrapper>
  );
};
