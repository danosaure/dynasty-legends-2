import PersonIcon from '@mui/icons-material/Person';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { AppThemeProvider } from '../theme-provider';

import { WrappedIconButton, type WrappedIconButtonProps } from './WrappedIconButton';

const TEST_TITLE = 'Some label';

const defaultProps: WrappedIconButtonProps = {
  label: TEST_TITLE,
  Icon: PersonIcon,
};

const meta = {
  title: 'WrappedIconButton',
  component: WrappedIconButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppThemeProvider>
        <Story />
      </AppThemeProvider>
    ),
  ],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof WrappedIconButton>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'base';

export const Disabled: Story = {
  args: {
    ...defaultProps,
    disabled: true,
  },
};
Disabled.storyName = 'disabled';

export const Small: Story = {
  args: {
    ...defaultProps,
    small: true,
  },
};
Small.storyName = 'small';

export const WithOnClick: Story = {
  args: {
    ...defaultProps,
    onClick: fn(),
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button');
    await userEvent.hover(button);
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
WithOnClick.storyName = 'with onClick';

export const TooltipBase: Story = {
  args: {
    ...defaultProps,
    withTooltip: 'bottom',
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button');
    await userEvent.hover(button);
  },
};
TooltipBase.storyName = 'tooltip: on the bottom';

export const TooltipRight: Story = {
  args: {
    ...defaultProps,
    withTooltip: 'right',
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button');
    await userEvent.hover(button);
  },
};
TooltipRight.storyName = 'tooltip: on the right';

export const TooltipDisabled: Story = {
  args: {
    ...defaultProps,
    disabled: true,
    withTooltip: 'right',
  },
};
TooltipDisabled.storyName = 'tooltip: disabled';

export const TooltipWithOnClick: Story = {
  args: {
    ...defaultProps,
    onClick: fn(),
    withTooltip: 'top',
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button');
    await userEvent.hover(button);
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
TooltipWithOnClick.storyName = 'tooltip: with onClick';
