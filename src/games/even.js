import getRandomInt from '../utils.js';

const isEven = (num) => (num % 2 === 0);

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};
