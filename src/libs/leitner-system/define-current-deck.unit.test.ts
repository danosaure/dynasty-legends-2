import { describe, expect, it } from 'vitest';
import { defineCurrentDeck } from './define-current-deck';
import type { LeitnerBoxes } from './Boxes';
import type { CurrentDeckItem } from './CurrentDeckItem';

type TestData = {
  id: string;
};

const compare = (a: CurrentDeckItem, b: CurrentDeckItem) => a.id.localeCompare(b.id);

describe('defineCurrentDeck()', () => {
  describe('No data', () => {
    it('returns empty list when no items defined', () => {
      const leitnerBoxes: LeitnerBoxes = [[], [], [], [], [], [], [], [], [], []] as const;
      const value = defineCurrentDeck<TestData>([], 0, leitnerBoxes, []);
      expect(value).to.deep.equals([]);
    });
  });

  describe('With data', () => {
    const data: TestData[] = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
      { id: 'd' },
      { id: 'e' },
      { id: 'f' },
      { id: 'g' },
      { id: 'h' },
      { id: 'i' },
      { id: 'j' },
      { id: 'k' },
      { id: 'l' },
    ];

    it('returns all items when no boxes', () => {
      const leitnerBoxes: LeitnerBoxes = [[], [], [], [], [], [], [], [], [], []] as const;
      const value = defineCurrentDeck<TestData>(data, 0, leitnerBoxes, []);
      expect(value.length).to.equals(data.length);
    });

    it('returns all items when box is in session', () => {
      const leitnerBoxes: LeitnerBoxes = [['a'], [], [], [], [], [], [], [], [], []];
      const value = defineCurrentDeck<TestData>(data, 0, leitnerBoxes, []);
      expect(value.length).to.equals(data.length);
    });

    it('returns all items except the ones in the non-session box', () => {
      const leitnerBoxes: LeitnerBoxes = [[], [], ['a'], [], [], [], [], [], [], []];
      const value = defineCurrentDeck<TestData>(data, 0, leitnerBoxes, []);
      const expectedResult: CurrentDeckItem[] = [
        { id: 'b', boxId: -1 },
        { id: 'c', boxId: -1 },
        { id: 'd', boxId: -1 },
        { id: 'e', boxId: -1 },
        { id: 'f', boxId: -1 },
        { id: 'g', boxId: -1 },
        { id: 'h', boxId: -1 },
        { id: 'i', boxId: -1 },
        { id: 'j', boxId: -1 },
        { id: 'k', boxId: -1 },
        { id: 'l', boxId: -1 },
      ];
      expect(value.sort(compare)).to.deep.equal(expectedResult);
    });

    it('returns all items except the ones in the non-session box', () => {
      const leitnerBoxes: LeitnerBoxes = [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g'], ['h'], ['i'], ['j']];
      const value = defineCurrentDeck<TestData>(data, 0, leitnerBoxes, []);

      const expectedResult: CurrentDeckItem[] = [
        { id: 'a', boxId: 0 },
        { id: 'b', boxId: 1 },
        { id: 'f', boxId: 5 },
        { id: 'i', boxId: 8 },
        { id: 'k', boxId: -1 },
        { id: 'l', boxId: -1 },
      ];
      expect(value.sort(compare)).to.deep.equal(expectedResult);
    });
  });
});
