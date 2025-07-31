import type { Meta, StoryObj } from '@storybook/react-vite';

import { expect, fn } from 'storybook/test';

import { ValueAdjuster, type ValueAdjusterProps } from './ValueAdjuster';

const defaultProps: ValueAdjusterProps = {
  value: 5,
  onChange: fn(),
};

const meta = {
  title: 'shared/ValueAdjuster',
  component: ValueAdjuster,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof ValueAdjuster>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ValueOnly: Story = {
  args: {
    ...defaultProps,
  },
  play: async ({ canvas, userEvent, args }) => {
    const decreaseButton = canvas.getByRole('button', { name: 'Decrease value' });
    await userEvent.hover(decreaseButton);
    await userEvent.click(decreaseButton);
    await expect(args.onChange).toHaveBeenCalledWith(4);

    const increaseButton = canvas.getByRole('button', { name: 'Increase value' });
    await userEvent.hover(increaseButton);
    await userEvent.click(increaseButton);
    await expect(args.onChange).toHaveBeenCalledWith(6);
  },
};
ValueOnly.storyName = '(value = 5)';

export const ValueOnlyZero: Story = {
  args: {
    ...defaultProps,
    value: 0,
  },
  play: async ({ canvas, userEvent, args }) => {
    const decreaseButton = canvas.getByRole('button', { name: 'Decrease value' });
    await expect(decreaseButton).toBeDisabled();

    const increaseButton = canvas.getByRole('button', { name: 'Increase value' });
    await userEvent.hover(increaseButton);
    await userEvent.click(increaseButton);
    await expect(args.onChange).toHaveBeenCalledWith(1);
  },
};
ValueOnlyZero.storyName = '(value = 0)';

export const ValueOnlyNegative: Story = {
  args: {
    ...defaultProps,
    value: -1,
  },
  play: async ({ canvas }) => {
    const decreaseButton = canvas.getByRole('button', { name: 'Decrease value' });
    await expect(decreaseButton).toBeDisabled();

    const increaseButton = canvas.getByRole('button', { name: 'Increase value' });
    await expect(increaseButton).toBeDisabled();
  },
};
ValueOnlyNegative.storyName = '(value < 0)';

export const ValueAndMaxValue: Story = {
  args: {
    ...defaultProps,
    maxValue: 10,
  },
  play: async ({ canvas, userEvent, args }) => {
    const decreaseButton = canvas.getByRole('button', { name: 'Decrease value' });
    await userEvent.hover(decreaseButton);
    await userEvent.click(decreaseButton);
    await expect(args.onChange).toHaveBeenCalledWith(4);

    const increaseButton = canvas.getByRole('button', { name: 'Increase value' });
    await userEvent.hover(increaseButton);
    await userEvent.click(increaseButton);
    await expect(args.onChange).toHaveBeenCalledWith(6);
  },
};
ValueAndMaxValue.storyName = '(value = 5) and (maxValue = 10)';

export const ValueAndMaxValueNegative: Story = {
  args: {
    ...defaultProps,
    maxValue: -10,
  },
  play: async ({ canvas }) => {
    const decreaseButton = canvas.getByRole('button', { name: 'Decrease value' });
    await expect(decreaseButton).toBeDisabled();

    const increaseButton = canvas.getByRole('button', { name: 'Increase value' });
    await expect(increaseButton).toBeDisabled();
  },
};
ValueAndMaxValueNegative.storyName = '(value = 5) and (maxValue < 0)';

export const ValueEqualsMaxValue: Story = {
  args: {
    ...defaultProps,
    maxValue: 5,
  },
  play: async ({ canvas, userEvent, args }) => {
    const decreaseButton = canvas.getByRole('button', { name: 'Decrease value' });
    await userEvent.hover(decreaseButton);
    await userEvent.click(decreaseButton);
    await expect(args.onChange).toHaveBeenCalledWith(4);

    const increaseButton = canvas.getByRole('button', { name: 'Increase value' });
    await expect(increaseButton).toBeDisabled();
  },
};
ValueEqualsMaxValue.storyName = '(value = 5) and (maxValue = 5)';
