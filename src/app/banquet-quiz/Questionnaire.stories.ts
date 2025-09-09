import type { Meta, StoryObj } from '@storybook/react-vite';
import { BanquetQuizQuestionnaire } from './Questionnaire';

const meta = {
  title: 'BanquetQuiz/Questionnaire',
  component: BanquetQuizQuestionnaire,
  tags: ['autodocs'],
} satisfies Meta<typeof BanquetQuizQuestionnaire>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};
Default.storyName = 'general';
