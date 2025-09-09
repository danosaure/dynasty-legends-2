import Typography from '@mui/material/Typography';
import { PaperWrapper } from '../shared';
import type { BanquetQuizType } from './types';
import Grid from '@mui/material/Grid';
import Button, { type ButtonOwnProps } from '@mui/material/Button';

const CHARCODE_A = 'A'.charCodeAt(0);

const getOptionLetter = (index: number): string => String.fromCodePoint(CHARCODE_A + index);

export type BanquetQuizQuestionProps = {
  question: BanquetQuizType;
  selected?: string;
  onClick: (label: string) => void;
};

export const BanquetQuizQuestion = ({ question, onClick, selected }: BanquetQuizQuestionProps) => {
  const optionsJSX = question.options.map((option, index) => {
    let buttonVariant: ButtonOwnProps['variant'] = 'outlined';
    let buttonColor: ButtonOwnProps['color'];

    if (selected) {
      if (selected === option.label) {
        buttonColor = option.answer ? 'success' : 'error';
        buttonVariant = 'contained';
      } else if (option.answer) {
        buttonColor = 'success';
      }
    }

    return (
      <Grid key={option.label} size={6}>
        <PaperWrapper>
          <Button
            onClick={() => onClick(option.label)}
            variant={buttonVariant}
            sx={{ width: '100%', justifyContent: 'flex-start' }}
            color={buttonColor}
          >
            <Typography variant="body1" display="inline" fontWeight="bold">
              &lt;{getOptionLetter(index)}&gt;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography variant="body2" display="inline">
              {option.label}
            </Typography>
          </Button>
        </PaperWrapper>
      </Grid>
    );
  });

  return (
    <PaperWrapper sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="body1">{question.question}</Typography>
        </Grid>
        <Grid container size={12} spacing={2}>
          {optionsJSX}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};
