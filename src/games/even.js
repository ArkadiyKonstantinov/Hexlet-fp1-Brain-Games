import getRandomInt from '../random.js';

export const evenRule = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const even = () => {
  const number = getRandomInt(1, 100);
  const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
  const question = `${number}`;
  const result = [question, rightAnswer];
  return result;
};
