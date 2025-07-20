import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongWarTierTechs, type HanzhongWarTierTechsProps } from './HanzhongWarTierTechs';
import { HANZHONG_WAR_TIER_1 } from '../data/hanzhong-war-tiers';

const defaultProps: HanzhongWarTierTechsProps = {
  info: HANZHONG_WAR_TIER_1,
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
