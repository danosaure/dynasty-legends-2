import type { Meta, StoryObj } from '@storybook/react-vite';

import { ResourceIncomes } from './ResourceIncomes';

const defaultProps = {};

const meta = {
  title: 'Hanzhong/ResourceIncomes',
  component: ResourceIncomes,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof ResourceIncomes>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';
