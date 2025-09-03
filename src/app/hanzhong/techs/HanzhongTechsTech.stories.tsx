import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongTechsTech, type HanzhongTechsTechProps } from './HanzhongTechsTech';
import { HANZHONG_TECH_ATTACK_TRAINING_1 } from './techs--data';

const defaultProps: HanzhongTechsTechProps = {
  info: HANZHONG_TECH_ATTACK_TRAINING_1,
  value: 2,
};

const meta = {
  title: 'Hanzhong/Techs/Tech',
  component: HanzhongTechsTech,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongTechsTech>;

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
    value: 20,
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
