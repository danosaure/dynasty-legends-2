import { describe, expect, it } from 'vitest';
import { defineCurrentDeck } from './define-current-deck';
import type { LeitnerBoxes } from './Boxes';

type TestData = {
  id: string;
};

describe('defineCurrentDeck()', () => {
  describe('No data', () => {
    it('returns empty list when no items defined', () => {
      const value = defineCurrentDeck<TestData>([], 0);
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
      const value = defineCurrentDeck<TestData>(data, 0);
      expect(value.length).to.equals(data.length);
    });

    it('returns all items when box is in session', () => {
      const boxes: LeitnerBoxes = [['a'], [], [], [], [], [], [], [], [], []];
      const value = defineCurrentDeck<TestData>(data, 0, boxes);
      expect(value.length).to.equals(data.length);
    });

    it('returns all items except the ones in the non-session box', () => {
      const boxes: LeitnerBoxes = [[], [], ['a'], [], [], [], [], [], [], []];
      const value = defineCurrentDeck<TestData>(data, 0, boxes);
      expect(value.sort()).to.deep.equal(['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']);
    });

    it('returns all items except the ones in the non-session box', () => {
      const boxes: LeitnerBoxes = [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g'], ['h'], ['i'], ['j']];
      const value = defineCurrentDeck<TestData>(data, 0, boxes);
      expect(value.sort()).to.deep.equal(['a', 'b', 'f', 'i', 'k', 'l']);
    });
  });
});
