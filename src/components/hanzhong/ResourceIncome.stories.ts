import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ResourceIncome, type ResourceIncomeProps } from './ResourceIncome';

const defaultProps: ResourceIncomeProps = {
  label: 'Lumber',
  value: 25,
  onChange: fn(),
};

const meta = {
  title: 'Hanzhong/ResourceIncome',
  component: ResourceIncome,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof ResourceIncome>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';

export const NegativeValue: Story = {
  args: {
    ...defaultProps,
    value: -1,
  },
};
NegativeValue.storyName = 'Negative value';
