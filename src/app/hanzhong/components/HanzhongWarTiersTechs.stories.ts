import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongWarTiersTechs } from './HanzhongWarTiersTechs';

const defaultProps = {};

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
