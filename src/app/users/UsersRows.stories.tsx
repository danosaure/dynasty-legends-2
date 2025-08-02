import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { UsersRows, type UsersRowsProps } from './UsersRows';
import type { PersistenceUserDataType } from '../../persistence';
import { AppContext, type AppContextType } from '../Context';

const users: PersistenceUserDataType[] = [
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

const defaultProps: UsersRowsProps = {
  users,
  onUsernameChange: fn(),
  onDeleteClick: fn(),
};

const meta = {
  title: 'user-management/UsersRows',
  component: UsersRows,
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
