import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { DebouncedInputField, type DebouncedInputFieldProps } from './debounced-inputfield';

const defaultProps: DebouncedInputFieldProps = {
  label: 'Label for field',
  value: 5,
  // unit?: string;
  // onChange?: (newValue: number) => void;
  // small?: boolean;
};

const meta = {
  title: 'DebouncedInputField',
  component: DebouncedInputField,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof DebouncedInputField>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'happy case';

export const WithUnit: Story = {
  args: {
    ...defaultProps,
    unit: '/h',
  },
};
WithUnit.storyName = 'with unit';

export const NegativeValue: Story = {
  args: {
    ...defaultProps,
    value: -5,
  },
};
NegativeValue.storyName = 'negative';

export const NegativeValueWithUnit: Story = {
  args: {
    ...defaultProps,
    value: -5,
    unit: '/h',
  },
};
NegativeValueWithUnit.storyName = 'negative with unit';

export const WithOnChange: Story = {
  args: {
    ...defaultProps,
    onChange: fn(),
  },
};
WithOnChange.storyName = 'editable';

export const WithOnChangeNegative: Story = {
  args: {
    ...defaultProps,
    value: -5,
    onChange: fn(),
  },
};
WithOnChangeNegative.storyName = 'editable with negative value';

export const WithOnChangeNegativeUnit: Story = {
  args: {
    ...defaultProps,
    value: -5,
    unit: '/h',
    onChange: fn(),
  },
};
WithOnChangeNegativeUnit.storyName = 'editable with negative value and unit';
