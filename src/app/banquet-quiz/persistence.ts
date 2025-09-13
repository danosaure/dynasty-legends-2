import type { LeitnerBox, LeitnerBoxes, LeitnerSystem } from '../../libs/leitner-system';
import { getUserData, saveUserData } from '../../persistence';
import type { BanquetQuizType } from './types';

export type BanquetQuizDecks = {
  retired: LeitnerBox;
  boxes: LeitnerBoxes;
};

export type BanquetQuizUserData = {
  sessionId: number;
  decks: BanquetQuizDecks;
};

export const saveBanquetQuiz = async (id: string, leitner: LeitnerSystem<BanquetQuizType>): Promise<void> => {
  const { sessionId, boxes, retiredDeck: retired } = leitner.stats();

  const dbUserData = await getUserData(id);

  dbUserData.banquetQuiz = {
    sessionId,
    decks: {
      boxes,
      retired,
    },
  };

  await saveUserData(dbUserData);
};
