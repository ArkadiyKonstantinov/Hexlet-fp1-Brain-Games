import getRandomInt from '../src/random.js';

export const gameProgressionRule = () => console.log('What number is missing in the progression?');

export const gameProgression = () => {
  let number = getRandomInt(1, 19);
  const increment = getRandomInt(1, 10);
  const missedNumberPosition = getRandomInt(1, 10);
  let question = '';
  let rightAnswer = 0;

  for (let i = 1; i <= 10; i += 1) {
    if (i === missedNumberPosition) {
      question = `${question} ..`;
      rightAnswer = number;
      number += increment;
    } else {
      question = `${question} ${number}`;
      number += increment;
    }
  }

  const result = [question, rightAnswer];
  return result;
};
