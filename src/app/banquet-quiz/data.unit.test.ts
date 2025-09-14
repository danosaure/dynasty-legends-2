import { describe, expect, it } from 'vitest';
import { BANQUET_QUIZ } from './data';

describe('BANQUET_QUIZ', () => {
  it(`has ${BANQUET_QUIZ.length} continuous ID`, () => {
    const idSet = new Set(BANQUET_QUIZ.map((question) => question.id));
    for (let i = 1; i <= BANQUET_QUIZ.length; i++) {
      const expectedID = `Q${('00' + i).slice(-3)}`;
      expect(idSet.has(expectedID), `contains ${expectedID}`).toBe(true);
    }
  });

  it(`has ${BANQUET_QUIZ.length} unique questions`, () => {
    const questions = BANQUET_QUIZ.reduce<Record<string, string[]>>((cumul, question) => {
      const previous = cumul[question.question] ?? [];
      return {
        ...cumul,
        [question.question]: previous.concat([question.id]),
      };
    }, {});

    const duplicates = Object.entries(questions).filter((data) => data[1].length > 1);
    expect(duplicates).to.have.lengthOf(0, `Duplicate questions ${duplicates.map((duplicate) => duplicate[1])}`);
  });

  it(`validates each of the ${BANQUET_QUIZ.length} questions`, () => {
    for (const question of BANQUET_QUIZ) {
      const answers = question.options.filter((option) => option.answer);
      expect(answers.length, `Has one answer. Found: ${answers.length}.`).to.equal(1);

      expect(question.options.length).to.be.greaterThan(1, `Question "${question.id}" only has 1 option.`);
      expect(question.options.length).to.be.lessThanOrEqual(4, `Quesion "${question.id}" has more than 4 options.`);

      for (const option of question.options) {
        expect(option.label).to.not.equal('', `Question "${question.id}" has an empty option.`);
      }
    }
  });
});
