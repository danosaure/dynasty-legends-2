import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { HanzhongTech, type HanzhongTechProps } from './HanzhongTech';
import type { HanzhongTechLevelType } from '../../types/hanzhong-tech-level-type';

const FOO_LEVEL: HanzhongTechLevelType = {
  resources: {
    lumber: 5,
    grains: 5,
    iron: 5,
  },
  bonuses: {},
};

const defaultProps: HanzhongTechProps = {
  info: {
    id: 'hanzhong-tech-id-123',
    assetPath: 'hanzhong/tech/attack-training-1.png',
    label: 'Name of the tech',
    description: 'Some tech description',
    levels: [FOO_LEVEL, FOO_LEVEL, FOO_LEVEL, FOO_LEVEL, FOO_LEVEL],
  },
  value: 2,
  onChange: fn(),
};

const meta = {
  title: 'Hanzhong/Tech',
  component: HanzhongTech,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongTech>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';

export const ValueTooHigh: Story = {
  args: {
    ...defaultProps,
    value: 10,
  },
};
ValueTooHigh.storyName = 'Value higher than levels';

export const LongName: Story = {
  args: {
    ...defaultProps,
    info: {
      ...defaultProps.info,
      label: 'Special Training - Vanguard Camp',
    },
  },
};
LongName.storyName = 'Long tech name';
