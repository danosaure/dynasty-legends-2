import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ProfileModal, type ProfileModalProps } from './Modal';
import { OFFICER_BONDS } from '../data';

const defaultProps: ProfileModalProps = {
  profilesQueue: [],
  onClose: fn(),
  showPrevious: fn(),
};

const meta = {
  title: 'Profiles/Modal',
  component: ProfileModal,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof ProfileModal>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'empty list';

export const OneItem: Story = {
  args: {
    ...defaultProps,
    profilesQueue: [{ profileNature: 'officer', profileId: OFFICER_BONDS[0].officerId }],
  },
};
OneItem.storyName = 'one officer';

export const MultipleItems: Story = {
  args: {
    ...defaultProps,
    profilesQueue: [
      { profileNature: 'officer', profileId: 'some-id' },
      { profileNature: 'officer', profileId: 'some-other-id' },
    ],
  },
};
MultipleItems.storyName = 'multiple items';
