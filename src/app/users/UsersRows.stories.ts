import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { UsersRows, type UsersRowsProps } from './UsersRows';

const defaultProps: UsersRowsProps = {
  users: [
    { id: 'foo-bar', username: 'Some username' },
    { id: 're-foo-bar', username: 'Some other username' },
    { id: 'no-username', username: '' },
  ],
  onUsernameChange: fn(),
  onDeleteClick: fn(),
};

const meta = {
  title: 'user-management/UsersRows',
  component: UsersRows,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof UsersRows>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'Base';

export const NoUsers: Story = {
  args: {
    ...defaultProps,
    users: [],
  },
};
NoUsers.storyName = 'No users';
