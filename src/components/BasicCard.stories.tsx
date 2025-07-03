import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { BasicCard } from './BasicCard';

export const ActionData = {
  assetImage: 'tech-attack-training-1.png',
  label: 'Nice Card',
  value: 5,
  maxValue: 10,
  onIncrease: fn(),
  onDecrease: fn(),
};

const meta = {
  title: 'BasicCard',
  component: BasicCard,
  tags: ['autodocs'],
  args: {
    ...ActionData,
  },
} satisfies Meta<typeof BasicCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ValueZero: Story = {
  args: {
    assetImage: 'tech-attack-training-1.png',
    label: 'Nice Card',
    value: 0,
    maxValue: 10,
  },
};
ValueZero.storyName = 'value = 0';

export const NegativeValue: Story = {
  args: {
    assetImage: 'tech-attack-training-1.png',
    label: 'Nice Card',
    value: -1,
    maxValue: 10,
  },
};
NegativeValue.storyName = 'value < 0';

export const ValueAboveMaxValue: Story = {
  args: {
    assetImage: 'tech-attack-training-1.png',
    label: 'Nice Card',
    value: 11,
    maxValue: 10,
  },
};
ValueAboveMaxValue.storyName = 'value > maxValue';
