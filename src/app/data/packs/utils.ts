import { generateBaseItemData } from '../../types';
import type { RewardType } from '../RewardType';
import type { PackType } from './PackType';

export const generatePackItemData = (name: string, items: RewardType[]): PackType =>
  ({
    ...generateBaseItemData('Pack', name, true),
    items,
  } as const);
