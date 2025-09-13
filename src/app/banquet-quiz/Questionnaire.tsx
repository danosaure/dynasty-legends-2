import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { EMPTY_LEITNER_BOXES, LeitnerSystem, type LeitnerBox, type LeitnerBoxes } from '../../libs/leitner-system';
import { useAppContext } from '../Context';
import { PaperWrapper } from '../shared';

import { BANQUET_QUIZ } from './data';
import { saveBanquetQuiz } from './persistence';
import { BanquetQuizQuestion } from './Question';
import type { BanquetQuizType } from './types';

export const BanquetQuizQuestionnaire = () => {
  const { user } = useAppContext();

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
    initializeSession(
      user.banquetQuiz?.sessionId ?? 0,
      user.banquetQuiz?.decks.boxes ?? EMPTY_LEITNER_BOXES,
      user.banquetQuiz?.decks.retired ?? []
    );
  }, []);

  const onAnswerSelected = (label: string) => {
    setSelected(label);
    if (question && leitner) {
      const correct = question.options.find((option) => option.label === label)?.answer;
      leitner.rebox(question.id, correct ?? false);
      saveBanquetQuiz(user.id, leitner);
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
    if (leitner) {
      saveBanquetQuiz(user.id, leitner);
    }
  };

  const startNextSession = () => {
    initializeSession(leitnerStats.sessionId + 1, leitnerStats.boxes, leitnerStats.retiredDeck);
    setIsSessionDone(false);
    setSelected('');
  };

  useEffect(() => {
    if (leitner) {
      saveBanquetQuiz(user.id, leitner);
    }
  }, [user.id, leitner]);

  if (!leitner) {
    return null;
  }

  const leitnerStats = leitner.stats();

  let percentJSX = null;
  if (leitnerStats.answered) {
    percentJSX = (
      <>
        Results: {leitnerStats.correct}/{leitnerStats.answered} ({leitnerStats.percent}%)
      </>
    );
  }

  return (
    <PaperWrapper sx={{ p: 1 }}>
      <Grid container spacing={2} direction="column">
        {question ? (
          <BanquetQuizQuestion question={question} onAnswerSelected={selected ? () => {} : onAnswerSelected} selected={selected} />
        ) : (
          <Alert severity="warning">No questions for this session.</Alert>
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
            <Alert severity="success">Session completed.</Alert>
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
