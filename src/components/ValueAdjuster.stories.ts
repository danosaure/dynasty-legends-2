import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { ValueAdjuster, type ValueAdjusterProps } from './ValueAdjuster';

const defaultProps: ValueAdjusterProps = {
  value: 5,
  onChange: fn(),
  horizontal: false,
};

const meta = {
  title: 'ValueAdjuster',
  component: ValueAdjuster,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof ValueAdjuster>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ValueOnly: Story = {
  args: {
    ...defaultProps,
  },
};
ValueOnly.storyName = '(value = 5)';

export const ValueOnlyZero: Story = {
  args: {
    ...defaultProps,
    value: 0,
  },
};
ValueOnlyZero.storyName = '(value = 0)';

export const ValueOnlyNegative: Story = {
  args: {
    ...defaultProps,
    value: -1,
  },
};
ValueOnlyNegative.storyName = '(value < 0)';

export const ValueAndMaxValue: Story = {
  args: {
    ...defaultProps,
    maxValue: 10,
  },
};
ValueAndMaxValue.storyName = '(value = 5) and (maxValue = 10)';

export const ValueAndMaxValueNegative: Story = {
  args: {
    ...defaultProps,
    maxValue: -10,
  },
};
ValueAndMaxValueNegative.storyName = '(value = 5) and (maxValue < 0)';

export const ValueEqualsMaxValue: Story = {
  args: {
    ...defaultProps,
    maxValue: 5,
  },
};
ValueEqualsMaxValue.storyName = '(value = 10) and (maxValue = 5)';
