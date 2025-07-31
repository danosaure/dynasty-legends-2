import { DOMAIN_KEY } from './domain';
import { SECTION_KEYS } from './sections';

type SectionRecordType = Record<string, string>;

const LEVEL_1 = 'lv1';
const LEVEL_2 = 'lv2';
const LEVEL_3 = 'lv3';
const LEVEL_4 = 'lv4';
const LEVEL_5 = 'lv5';
const LEVEL_6 = 'lv6';
const LEVEL_7 = 'lv7';
const LEVEL_8 = 'lv8';
const LEVEL_9 = 'lv9';

const HANZHONG_TERRITORY = `${DOMAIN_KEY}--${SECTION_KEYS.TERRITORY}`;
export const HANZHONG_TERRITORY_LEVEL_IDS = {
  ...[
    ['LEVEL__1', LEVEL_1],
    ['LEVEL__2', LEVEL_2],
    ['LEVEL__3', LEVEL_3],
    ['LEVEL__4', LEVEL_4],
    ['LEVEL__5', LEVEL_5],
    ['LEVEL__6', LEVEL_6],
    ['LEVEL__7', LEVEL_7],
    ['LEVEL__8', LEVEL_8],
    ['LEVEL__9', LEVEL_9],
  ].reduce<SectionRecordType>((cumul, infos) => {
    const [key, level] = infos;
    return {
      ...cumul,
      [key]: `${HANZHONG_TERRITORY}--${level}`,
    } as const;
  }, {} as SectionRecordType),
} as const;

const TYPES_INFO: [string, string][] = [
  ['LUMBER_MILL', 'lumber-mill'],
  ['GRANARY', 'granary'],
  ['IRON_MINE', 'iron-mine'],
];

export const HANZHONG_TERRITORY_IDS = TYPES_INFO.reduce<SectionRecordType>(
  (cumul: SectionRecordType, typeInfos: [string, string]) => {
    const [keyPrefix, idPrefix] = typeInfos;
    return [LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6, LEVEL_7, LEVEL_8, LEVEL_9].reduce<SectionRecordType>(
      (levelCumul: SectionRecordType, levelKey: string, idx: number) => {
        return {
          ...levelCumul,
          [`${keyPrefix}__${idx + 1}`]: `${HANZHONG_TERRITORY}--${idPrefix}--${levelKey}`,
        } as const;
      },
      cumul
    );
  },
  {} as SectionRecordType
);
