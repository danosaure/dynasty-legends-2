import type { Meta, StoryObj } from '@storybook/react-vite';

import { Officer, type OfficerProps } from './Officer';
import { OFFICER_BONDS } from '../data';

const defaultProps: OfficerProps = {
  id: OFFICER_BONDS[0].officerId,
};

const meta = {
  title: 'Officers/Officer',
  component: Officer,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof Officer>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'base';

export const Bonded: Story = {
  args: {
    ...defaultProps,
    id: OFFICER_BONDS[0].bondOfficerId,
  },
};
Bonded.storyName = 'bonded officer';
