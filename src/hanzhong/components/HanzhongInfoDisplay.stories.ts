import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongInfoDisplay, type HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';

const defaultProps: HanzhongInfoDisplayProps = {
  label: 'Some label for ',
  value: 2,
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
