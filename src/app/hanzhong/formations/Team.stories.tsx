import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { HanzhongContext } from '../HanzhongContext';
import type { HanzhongContextType } from '../types';
import { DEFAULT_HANZHONG_CONTEXT_DATA } from '../utils';

import { HanzhongFormationsTeam, type HanzhongFormationsTeamProps } from './Team';

const hanzhongContextData: HanzhongContextType = {
  ...DEFAULT_HANZHONG_CONTEXT_DATA,
  onChange: fn(),
} as const;

const defaultProps: HanzhongFormationsTeamProps = {
  team: [
    { id: 'abc', tacticalPoints: 50 },
    { id: 'def', tacticalPoints: 20 },
  ],
};

const meta = {
  title: 'Hanzhong/Formations/Team',
  component: HanzhongFormationsTeam,
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
} satisfies Meta<typeof HanzhongFormationsTeam>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';
