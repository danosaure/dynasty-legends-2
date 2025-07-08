import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { HanzhongInfoDisplay, type HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';

const defaultProps: HanzhongInfoDisplayProps = {
  id: 'some--foo-bar-id',
  label: 'Some label for ',
  currentValue: 2,
  projectedValue: 2,
  onChange: fn(),
};

const meta = {
  title: 'Hanzhong/InfoDisplay',
  component: HanzhongInfoDisplay,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongInfoDisplay>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';

export const WithUnits: Story = {
  args: {
    ...defaultProps,
    unit: '/h',
  },
};
WithUnits.storyName = 'with units';
