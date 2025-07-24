import type { Meta, StoryObj } from '@storybook/react-vite';

import { HANZHONG_WAR_TIER_1 } from '../data/hanzhong-war-tiers';

import { HanzhongTechsWarTier, type HanzhongTechsWarTierProps } from './HanzhongTechsWarTier';

const defaultProps: HanzhongTechsWarTierProps = {
  info: HANZHONG_WAR_TIER_1,
};

const meta = {
  title: 'Hanzhong/Techs/WarTier',
  component: HanzhongTechsWarTier,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongTechsWarTier>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';
