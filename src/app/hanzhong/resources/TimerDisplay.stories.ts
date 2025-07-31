import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongTimerDisplay, type HanzhongTimerDisplayProps } from './TimerDisplay';

const defaultProps: HanzhongTimerDisplayProps = {
  minutes: 25,
};

const meta = {
  title: 'Hanzhong/Timer/Display',
  component: HanzhongTimerDisplay,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongTimerDisplay>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';

export const NULL: Story = {
  args: {
    ...defaultProps,
    minutes: null,
  },
};
NULL.storyName = 'null -> error ¯\\_(ツ)_/¯';

export const MINUS1: Story = {
  args: {
    ...defaultProps,
    minutes: -1,
  },
};
MINUS1.storyName = '-1 -> success DONE';

export const ZERO: Story = {
  args: {
    ...defaultProps,
    minutes: 0,
  },
};
ZERO.storyName = '0 -> success NOW';

export const MINUTES29: Story = {
  args: {
    ...defaultProps,
    minutes: 29,
  },
};
MINUTES29.storyName = '29 -> success';

export const MINUTES30: Story = {
  args: {
    ...defaultProps,
    minutes: 30,
  },
};
MINUTES30.storyName = '30 -> success';

export const MINUTES31: Story = {
  args: {
    ...defaultProps,
    minutes: 31,
  },
};
MINUTES31.storyName = '31 -> warning';

export const TwoHoursMinus1: Story = {
  args: {
    ...defaultProps,
    minutes: 2 * 60 - 1,
  },
};
TwoHoursMinus1.storyName = '1h59m -> warning';

export const TwoHours: Story = {
  args: {
    ...defaultProps,
    minutes: 2 * 60,
  },
};
TwoHours.storyName = '2h -> warning';

export const TwoHoursAnd1: Story = {
  args: {
    ...defaultProps,
    minutes: 2 * 60 + 1,
  },
};
TwoHoursAnd1.storyName = '2h01m -> error';

export const TwentyFourHoursMinus1: Story = {
  args: {
    ...defaultProps,
    minutes: 24 * 60 - 1,
  },
};
TwentyFourHoursMinus1.storyName = '23h59m -> error';

export const TwentyFourHours: Story = {
  args: {
    ...defaultProps,
    minutes: 24 * 60,
  },
};
TwentyFourHours.storyName = '24h -> error';

export const TwentyFourHoursPlus1: Story = {
  args: {
    ...defaultProps,
    minutes: 24 * 60 + 1,
  },
};
TwentyFourHoursPlus1.storyName = '24h+ -> error';
