import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { HanzhongWarTiersTechs, type HanzhongWarTiersTechsProps } from './HanzhongWarTiersTechs';
import { HANZHONG_WAR_TIERS } from '../data/hanzhong-war-tiers';

const defaultProps: HanzhongWarTiersTechsProps = {
  info: HANZHONG_WAR_TIERS,
  onChange: fn(),
};

const meta = {
  title: 'Hanzhong/WarTiersTechs',
  component: HanzhongWarTiersTechs,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongWarTiersTechs>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';
