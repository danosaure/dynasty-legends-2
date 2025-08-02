import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { AppContext, type AppContextBaseUser, type AppContextType } from '../Context';
import { UserDashboard } from './Dashboard';

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
  refreshApp: fn(),
  setCurrentUserId: fn(),
  setMenu: fn(),
} as const;

const meta = {
  title: 'user-management/UserDashboard',
  component: UserDashboard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppContext.Provider value={appContextData}>
        <Story />
      </AppContext.Provider>
    ),
  ],
  args: {},
} satisfies Meta<typeof UserDashboard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
};
Default.storyName = 'Base';
