import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { HanzhongWarTierTechs, type HanzhongWarTierTechsProps } from './HanzhongWarTierTechs';
import { HANZHONG_WAR_TIER_1 } from '../../data/hanzhong/hanzhong-war-tiers';

const defaultProps: HanzhongWarTierTechsProps = {
  info: HANZHONG_WAR_TIER_1,
  currentSelections: { 'hanzhong--tech--attack-training-1': 3 },
  onChange: fn(),
};

const meta = {
  title: 'Hanzhong/WarTierTechs',
  component: HanzhongWarTierTechs,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongWarTierTechs>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';
