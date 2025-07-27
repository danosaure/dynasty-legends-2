import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { OfficersFactionSelector, type OfficersFactionSelectorProps } from './FactionSelector';
import { getFactionIdByName } from '../data';

const defaultProps: OfficersFactionSelectorProps = {
  selected: '',
  onSelect: fn(),
};

const meta = {
  title: 'Officers/Factions',
  component: OfficersFactionSelector,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof OfficersFactionSelector>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'base';

export const WeiSelected: Story = {
  args: {
    ...defaultProps,
    selected: getFactionIdByName('Wei'),
  },
};
WeiSelected.storyName = 'Wei selected';

export const ShuSelected: Story = {
  args: {
    ...defaultProps,
    selected: getFactionIdByName('Shu'),
  },
};
ShuSelected.storyName = 'Shu selected';

export const WuSelected: Story = {
  args: {
    ...defaultProps,
    selected: getFactionIdByName('Wu'),
  },
};
WuSelected.storyName = 'Wu selected';

export const OtherSelected: Story = {
  args: {
    ...defaultProps,
    selected: getFactionIdByName('Other'),
  },
};
OtherSelected.storyName = 'Other selected';
