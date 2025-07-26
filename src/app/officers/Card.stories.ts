import type { Meta, StoryObj } from '@storybook/react-vite';

import { OfficerCard, type OfficerCardProps } from './Card';
import { sanitizeId } from '../../utils';
import {
  APTITUDE_KEYS,
  FACTION_KEYS,
  getAptitudeIdByAptitude,
  getFactionIdByName,
  getOfficerTypeIdByName,
  OFFICER_TYPE_KEYS,
} from '../data';

const defaultProps: OfficerCardProps = {
  officer: {
    id: sanitizeId(`officers--Dong Zhuo`),
    name: 'Dong Zhuo',
    factionId: getFactionIdByName(FACTION_KEYS.OTHER),
    aptitudeId: getAptitudeIdByAptitude(APTITUDE_KEYS[18]),
    officerTypeIds: [getOfficerTypeIdByName(OFFICER_TYPE_KEYS.TANK)],
  },
};

const meta = {
  title: 'Officers/OfficerCard',
  component: OfficerCard,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof OfficerCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'Dong Zhuo';

export const ZhaoYun: Story = {
  args: {
    ...defaultProps,
    officer: {
      id: sanitizeId(`officers--Zhao Yun`),
      name: 'Zhao Yun',
      factionId: getFactionIdByName(FACTION_KEYS.SHU),
      aptitudeId: getAptitudeIdByAptitude(APTITUDE_KEYS[19]),
      officerTypeIds: [getOfficerTypeIdByName(OFFICER_TYPE_KEYS.ASSASSIN)],
    },
  },
};
ZhaoYun.storyName = 'Zhao Yun';
