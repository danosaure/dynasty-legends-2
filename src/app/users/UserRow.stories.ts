import type { Meta, StoryObj } from '@storybook/react-vite';

import { UserRow, type UserRowProps } from './UserRow';
import { expect, fn } from 'storybook/test';

const defaultProps: UserRowProps = {
  user: { id: 'foo-bar', username: 'Some username' },

  onUsernameChange: fn(),
  onDeleteClick: fn(),
};

const meta = {
  title: 'user-management/UserRow',
  component: UserRow,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof UserRow>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'Base';

export const NoUsername: Story = {
  args: {
    user: { id: 'foo-foo', username: '' },
  },
};
NoUsername.storyName = 'No username';

export const Automated: Story = {
  args: {
    user: { id: 'foo-foo', username: '' },
  },
  play: async ({ canvas, userEvent, args }) => {
    const editButton = canvas.getByRole('button', { name: 'Edit' });
    await userEvent.click(editButton);

    const inputField = canvas.getByPlaceholderText('Enter a username');
    await userEvent.type(inputField, 'A new username');

    const deleteButton = canvas.getByRole('button', { name: 'Delete' });
    await userEvent.hover(deleteButton);
    await userEvent.click(deleteButton);
    await expect(args.onUsernameChange).toHaveBeenCalledWith('foo-bar');
  },
};
Automated.storyName = 'Automated interactions';
