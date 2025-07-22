import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongTechsTechCard, type HanzhongTechsTechCardProps } from './HanzhongTechsTechCard';

const defaultProps: HanzhongTechsTechCardProps = {
  id: 'some-tech-id',
  assetImage: 'hanzhong/tech/attack-training-1.png',
  label: 'Nice Card',
  value: 5,
  maxValue: 10,
};

const meta = {
  title: 'Hanzhong/Techs/TechCard',
  component: HanzhongTechsTechCard,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongTechsTechCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';

export const ValueZero: Story = {
  args: {
    ...defaultProps,
    value: 0,
  },
};
ValueZero.storyName = 'value = 0';

export const MaxValue: Story = {
  args: {
    ...defaultProps,
    value: 10,
  },
};
MaxValue.storyName = 'value = maxValue';

export const NegativeValue: Story = {
  args: {
    ...defaultProps,
    value: -1,
  },
};
NegativeValue.storyName = 'value < 0';

export const ValueAboveMaxValue: Story = {
  args: {
    ...defaultProps,
    value: 11,
  },
};
ValueAboveMaxValue.storyName = 'value > maxValue';
