/**
 * Fisher-Yates shuffle using Durstenfeld algorithm to reduce time complexity.
 *
 * @see: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @param originalList List of elements to randomly sort.
 * @returns Randomized list of elements from `originalList`.
 */

export const randomizeList = <T>(originalList: T[]): T[] => {
  const workingList = [...originalList];
  const len = workingList.length;

  for (let i = len - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [workingList[i], workingList[j]] = [workingList[j], workingList[i]];
  }

  return workingList;
};
