import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongTechCard, type HanzhongTechCardProps } from './tech-card';

const defaultProps: HanzhongTechCardProps = {
  id: 'some-tech-id',
  assetImage: 'hanzhong/tech/attack-training-1.png',
  label: 'Nice Card',
  value: 5,
  maxValue: 10,
};

const meta = {
  title: 'Hanzhong/HanzhongTechCard',
  component: HanzhongTechCard,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongTechCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';

export const ValueZero: Story = {
  args: {
    ...defaultProps,
    value: 0,
  },
};
ValueZero.storyName = 'value = 0';

export const MaxValue: Story = {
  args: {
    ...defaultProps,
    value: 10,
  },
};
MaxValue.storyName = 'value = maxValue';

export const NegativeValue: Story = {
  args: {
    ...defaultProps,
    value: -1,
  },
};
NegativeValue.storyName = 'value < 0';

export const ValueAboveMaxValue: Story = {
  args: {
    ...defaultProps,
    value: 11,
  },
};
ValueAboveMaxValue.storyName = 'value > maxValue';
