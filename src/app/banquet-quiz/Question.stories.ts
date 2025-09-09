import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { BanquetQuizQuestion, type BanquetQuizQuestionProps } from './Question';
import { BANQUET_QUIZ } from './data';

const defaultProps: BanquetQuizQuestionProps = {
  question: BANQUET_QUIZ[0],
  onClick: fn(),
};

const meta = {
  title: 'BanquetQuiz/Question',
  component: BanquetQuizQuestion,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof BanquetQuizQuestion>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'general';

export const CorrectSelected: Story = {
  args: {
    ...defaultProps,
    selected: defaultProps.question.options.find((option) => option.answer)?.label,
  },
};
CorrectSelected.storyName = 'selected correct answer';

export const WrongSelected: Story = {
  args: {
    ...defaultProps,
    selected: defaultProps.question.options.find((option) => !option.answer)?.label,
  },
};
WrongSelected.storyName = 'selected wrong answer';
