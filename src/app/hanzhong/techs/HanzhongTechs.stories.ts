import type { Meta, StoryObj } from '@storybook/react-vite';

import { HanzhongTechs } from './HanzhongTechs';

const defaultProps = {};

const meta = {
  title: 'Hanzhong/Techs',
  component: HanzhongTechs,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof HanzhongTechs>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';
