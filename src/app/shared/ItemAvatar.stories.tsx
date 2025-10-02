import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { ItemAvatar, type ItemAvatarProps } from './ItemAvatar';
import { APTITUDE_KEYS, generateItemIdByTypeAndName } from '../data';
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
  refreshApp: fn(),
  setCurrentUserId: fn(),
  setMenu: fn(),
  showProfile: fn(),
} as const;

const defaultProps: ItemAvatarProps = {
  item: {
    id: generateItemIdByTypeAndName('Weapon Shard', 'Heavenly Sword Shard'),
    type: 'Weapon Shard',
    name: 'Heavenly Sword Shard',
    aptitude: APTITUDE_KEYS[20],
    hasAvatar: true,
  },
};

const meta = {
  title: 'shared/ItemAvatar',
  component: ItemAvatar,
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
} satisfies Meta<typeof ItemAvatar>;

type Story = StoryObj<typeof meta>;

export default meta;

// ----- Base -----

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'base';
