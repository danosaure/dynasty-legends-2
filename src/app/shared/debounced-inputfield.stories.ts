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

// ----- Base -----

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'base';

export const DefaultNegative: Story = {
  args: {
    ...defaultProps,
    value: -5,
  },
};
DefaultNegative.storyName = 'base negative';

// with unit

export const WithUnit: Story = {
  args: {
    ...defaultProps,
    unit: '/h',
  },
};
WithUnit.storyName = 'unit: base';

export const WithUnitNegative: Story = {
  args: {
    ...defaultProps,
    value: -5,
    unit: '/h',
  },
};
WithUnitNegative.storyName = 'unit: negative';

// MaxValue.

export const MaxValueDefault: Story = {
  args: {
    ...defaultProps,
    maxValue: 50,
  },
};
MaxValueDefault.storyName = 'maxValue: base';

export const MaxValueNegative: Story = {
  args: {
    ...defaultProps,
    maxValue: 50,
    value: -5,
  },
};
MaxValueNegative.storyName = 'maxValue: negative';

export const MaxValueEqualsValue: Story = {
  args: {
    ...defaultProps,
    maxValue: 50,
    value: 50,
  },
};
MaxValueEqualsValue.storyName = 'maxValue: equals value';

export const MaxValueLessThanValue: Story = {
  args: {
    ...defaultProps,
    maxValue: 50,
    value: 100,
  },
};
MaxValueLessThanValue.storyName = 'maxValue: < value';

// maxValue and unit

export const WithMaxValueAndUnitDefault: Story = {
  args: {
    ...defaultProps,
    maxValue: 50,
    unit: '/h',
  },
};
WithMaxValueAndUnitDefault.storyName = 'maxValue & unit: base';

export const WithMaxValueAndUnitNegative: Story = {
  args: {
    ...defaultProps,
    maxValue: 50,
    unit: '/h',
    value: -5,
  },
};
WithMaxValueAndUnitNegative.storyName = 'maxValue & unit: negative';

export const WithMaxValueAndUnitOver: Story = {
  args: {
    ...defaultProps,
    maxValue: 50,
    unit: '/h',
    value: 100,
  },
};
WithMaxValueAndUnitOver.storyName = 'maxValue & unit: over';

// onChange

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
