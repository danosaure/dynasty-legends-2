import type { Meta, StoryObj } from '@storybook/react-vite';

import { UserRow, type UserRowProps } from './UserRow';
import { expect, fn } from 'storybook/test';
import { AppContext, type AppContextBaseUser, type AppContextType } from '../Context';

const users: AppContextBaseUser[] = [
  { id: 'foo1', username: 'bar1' },
  { id: 'foo2', username: 'bar2' },
  { id: 'foo3', username: 'bar3' },
  { id: 'foo4', username: 'bar4' },
  { id: 'foo5', username: 'bar5' },
  { id: 'foo6', username: 'bar6' },
  { id: 'no-username', username: '' },
];

const appContextData: AppContextType = {
  users,
  user: users[0],
  setUsername: fn(),
  setMenu: fn(),
} as const;

const defaultProps: UserRowProps = {
  user: appContextData.user,
  onUsernameChange: fn(),
  onDeleteClick: fn(),
};

const meta = {
  title: 'user-management/UserRow',
  component: UserRow,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppContext.Provider value={appContextData}>
        <Story />
      </AppContext.Provider>
    ),
  ],

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
    user: { id: 'no-username', username: '' },
  },
};
NoUsername.storyName = 'No username';

export const Automated: Story = {
  args: {
    user: appContextData.user,
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
