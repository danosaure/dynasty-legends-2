import type { Meta, StoryObj } from '@storybook/react-vite';

import { OFFICERS } from '../data';

import { OfficerCard, type OfficerCardProps } from './Card';

const defaultProps: OfficerCardProps = {
  officer: OFFICERS[Math.floor(Math.random() * OFFICERS.length)],
  selectedFaction: '',
};

const meta = {
  title: 'Officers/OfficerCard',
  component: OfficerCard,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof OfficerCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'random';

export const Another: Story = {
  args: {
    ...defaultProps,
    officer: OFFICERS[Math.floor(Math.random() * OFFICERS.length)],
  },
};
Another.storyName = 'another officer';
