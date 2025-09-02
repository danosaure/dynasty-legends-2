import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { DEFAULT_HANZHONG_CONTEXT_DATA, HanzhongContext, type HanzhongContextType } from '../HanzhongContext';

import { HanzhongFormationsCharacter, type HanzhongFormationsCharacterPops } from './Character';
import { STRUCTURED_FORMATIONS } from './structured-formations';

const INFO = STRUCTURED_FORMATIONS.vanguardCamp.team1.chief;

const hanzhongContextData: HanzhongContextType = {
  ...DEFAULT_HANZHONG_CONTEXT_DATA,
  formationsUserData: { [INFO.tacticalPoints]: 25 },
  onChange: fn(),
} as const;

const defaultProps: HanzhongFormationsCharacterPops = {
  info: INFO,
  label: 'Chief',
  onClick: fn(),
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
