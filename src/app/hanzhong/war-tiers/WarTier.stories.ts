import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongWarTier, type HanzhongWarTierProps } from './WarTier';
import { HANZHONG_WAR_TIERS } from './war-tiers-data';

const defaultProps: HanzhongWarTierProps = {
  warTier: HANZHONG_WAR_TIERS[0],
};

const meta = {
  title: 'Hanzhong/WarTier',
  component: HanzhongWarTier,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongWarTier>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';
