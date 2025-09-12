import { randomizeList } from '../randomize-list';
import type { LeitnerBox } from './Box';
import { LEITNER_BOX_NAMES } from './box-names';
import type { LeitnerBoxes } from './Boxes';
import type { CurrentDeckItem } from './CurrentDeckItem';
import type { LeitnerMustHaveId } from './MustHaveId';
import type { LeitnerSessionId } from './SessionId';

type BoxSet = Set<string>;

export const defineCurrentDeck = <T extends LeitnerMustHaveId>(
  data: T[],
  sessionId: LeitnerSessionId,
  boxes: LeitnerBoxes,
  retiredDeck: LeitnerBox
): CurrentDeckItem[] => {
  // Let's gather IDs already in boxes, so we can assume the remaining needs to
  // be in the Current Deck. This will take into account of new items that were
  // not previously tested.

  const allIdsInBoxes = boxes.concat([retiredDeck]).reduce<BoxSet>((set, box) => new Set([...set, ...box]), new Set());

  const allIdsNotInBoxes = data.reduce<CurrentDeckItem[]>((items, item) => {
    if (!allIdsInBoxes.has(item.id)) {
      return items.concat([{ id: item.id, boxId: -1 }]);
    }
    return items;
  }, []);

  // We must now add all the items in boxes where their name contains the
  // sessionId.

  const currentDeck = LEITNER_BOX_NAMES.reduce<CurrentDeckItem[]>((items, boxName, index) => {
    if (boxName.includes(String(sessionId))) {
      return items.concat(boxes[index].map<CurrentDeckItem>((itemId) => ({ id: itemId, boxId: index as LeitnerSessionId })));
    }
    return items;
  }, allIdsNotInBoxes);

  return randomizeList([...currentDeck]);
};
