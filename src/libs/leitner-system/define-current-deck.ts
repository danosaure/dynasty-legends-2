import { randomizeList } from '../randomize-list';
import type { LeitnerBox } from './Box';
import { LEITNER_BOX_NAMES } from './box-names';
import { EMPTY_BOXES, type LeitnerBoxes } from './Boxes';
import type { LeitnerMustHaveId } from './MustHaveId';
import type { LeitnerSessionId } from './SessionId';

type BoxSet = Set<string>;

export const defineCurrentDeck = <T extends LeitnerMustHaveId>(
  data: T[],
  sessionId: LeitnerSessionId,
  boxes: LeitnerBoxes = EMPTY_BOXES
): LeitnerBox => {
  // Let's gather IDs already in boxes, so we can assume the remaining needs to
  // be in the Current Deck. This will take into account of new items that were
  // not previously tested.

  const allIdsInBoxes = boxes.reduce<BoxSet>((set, box) => new Set([...set, ...box]), new Set());

  const allIdsNotInBoxes = data.reduce<BoxSet>(
    (set, item) => {
      if (!allIdsInBoxes.has(item.id)) {
        set.add(item.id);
      }
      return set;
    },

    new Set()
  );

  // We must now add all the items in boxes where their name contains the
  // sessionId.

  const currentDeck = LEITNER_BOX_NAMES.reduce<BoxSet>((set, boxName, index) => {
    if (boxName.includes(String(sessionId))) {
      return new Set([...set, ...boxes[index]]);
    }
    return set;
  }, allIdsNotInBoxes);

  return randomizeList([...currentDeck]);
};
