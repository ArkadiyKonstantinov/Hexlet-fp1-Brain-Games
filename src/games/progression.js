import getRandomInt from '../utils.js';

export const description = 'What number is missing in the progression?';

export const generateRound = () => {
  let number = getRandomInt(1, 19);
  const increment = getRandomInt(1, 10);
  const missingNumberPosition = getRandomInt(1, 10);
  let question = '';
  let rightAnswer = 0;

  for (let i = 1; i <= 10; i += 1) {
    if (i === missingNumberPosition) {
      question = `${question} ..`;
      rightAnswer = number;
      number += increment;
    } else {
      question = `${question} ${number}`;
      number += increment;
    }
  }
  question = question.trim();

  const result = [question, rightAnswer];
  return result;
};
