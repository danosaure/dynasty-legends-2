import type { Meta, StoryObj } from '@storybook/react-vite';

import { Username, type UsernameProps } from './Username';

const defaultProps: UsernameProps = {
  username: 'Foo Bar',
};

const meta = {
  title: 'user-management/Username',
  component: Username,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof Username>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'Base';

export const EmptyString: Story = {
  args: {
    ...defaultProps,
    username: '',
  },
};
EmptyString.storyName = 'empty string';
