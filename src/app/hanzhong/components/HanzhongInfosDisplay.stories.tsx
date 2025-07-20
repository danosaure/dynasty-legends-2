import Box from '@mui/material/Box';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { HanzhongInfosDisplay, type HanzhongInfosDisplayProps } from './HanzhongInfosDisplay';

const defaultProps: HanzhongInfosDisplayProps = {
  label: 'Random Info Title',
  items: [],
  // items: HanzhongInfoDataType[],
  // configure?: () => void;
};

const meta = {
  title: 'Hanzhong/InfosDisplay',
  component: HanzhongInfosDisplay,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '250px' }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof HanzhongInfosDisplay>;

type Story = StoryObj<typeof meta>;

export default meta;

// ----- With configure -----

export const Default: Story = {
  args: {
    ...defaultProps,
    configure: fn(),
    items: [
      {
        label: '[A] base value',
        value: 50,
      },
      {
        label: '[B] negative value',
        value: -200,
      },
      {
        label: '[C] with unit',
        value: 100,
        unit: 'mph',
      },
      {
        label: '[D] negative with unit',
        value: -50,
        unit: '/h',
      },
    ],
  },
};
Default.storyName = 'melting pot';

// Only title.

export const TitleOnly: Story = {
  args: {
    ...defaultProps,
  },
};
TitleOnly.storyName = 'Title only';

export const TitleWithConfigure: Story = {
  args: {
    ...defaultProps,
    configure: fn(),
  },
};
TitleWithConfigure.storyName = 'Title with configure';

// With one item

export const ABaseValue: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[A] base value',
        value: 50,
      },
    ],
  },
};
ABaseValue.storyName = '[A] base value';

export const BNegativeValue: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[B] negative value',
        value: -200,
      },
    ],
  },
};
BNegativeValue.storyName = '[B] negative value';

export const CWithUnit: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[C] with unit',
        value: 100,
        unit: 'mph',
      },
    ],
  },
};
CWithUnit.storyName = '[C] with unit';

export const DNegativeWithUnit: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[D] negative with unit',
        value: -50,
        unit: '/h',
      },
    ],
  },
};
DNegativeWithUnit.storyName = '[D] negative with unit';

export const EWithMaxValue: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[E] with maxValue',
        value: 50,
        maxValue: 100,
      },
    ],
  },
};
EWithMaxValue.storyName = '[E] with maxValue';

export const FWithMaxValueEquals: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[F] with maxValue = value',
        value: 50,
        maxValue: 50,
      },
    ],
  },
};
FWithMaxValueEquals.storyName = '[F] with maxValue = value';

export const GWithMaxValueOver: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[G] with maxValue = value',
        value: 100,
        maxValue: 50,
      },
    ],
  },
};
GWithMaxValueOver.storyName = '[G] with maxValue < value';

export const HWithMaxValueAndUnit: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[H] with maxValue and unit',
        value: 50,
        maxValue: 100,
        unit: '/h',
      },
    ],
  },
};
HWithMaxValueAndUnit.storyName = '[H] with maxValue and unit';

export const IWithMaxValueAndUnitNegative: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[I] negative with maxValue and unit',
        value: -50,
        maxValue: 100,
        unit: '/h',
      },
    ],
  },
};
IWithMaxValueAndUnitNegative.storyName = '[I] negative with maxValue and unit';

export const JWithMaxValueAndUnitOver: Story = {
  args: {
    ...defaultProps,
    items: [
      {
        label: '[J] over with maxValue and unit',
        value: 200,
        maxValue: 100,
        unit: '/h',
      },
    ],
  },
};
JWithMaxValueAndUnitOver.storyName = '[J] over with maxValue and unit';
