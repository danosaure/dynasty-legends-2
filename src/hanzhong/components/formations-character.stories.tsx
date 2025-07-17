import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { HanzhongFormationsCharacter, type HanzhongFormationsCharacterPops } from './formations-character';
import { HanzhongContext, type HanzhongContextType } from './HanzhongContext';
import { DEFAULT_HANZHONG_CONTEXT_DATA } from '../utils';

const hanzhongContextData: HanzhongContextType = {
  ...DEFAULT_HANZHONG_CONTEXT_DATA,
  onChange: fn(),
} as const;

const defaultProps: HanzhongFormationsCharacterPops = {
  info: { id: 'abc' },
  rank: 'general',
};

const meta = {
  title: 'Hanzhong/Formations/Character',
  component: HanzhongFormationsCharacter,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <HanzhongContext.Provider value={hanzhongContextData}>
        <Story />
      </HanzhongContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongFormationsCharacter>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'general';

export const Negative: Story = {
  args: {
    ...defaultProps,
    info: { id: 'abc' },
  },
};
Negative.storyName = 'general negative';

export const LtDefault: Story = {
  args: {
    info: { id: 'abc' },
    rank: 'lieutenant',
  },
};
LtDefault.storyName = 'lieutenant';

export const LtNegative: Story = {
  args: {
    info: { id: 'abc' },
    rank: 'lieutenant',
  },
};
LtNegative.storyName = 'lieutenant';
