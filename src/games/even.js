import getRandomInt from '../utils.js';
import start from '../index.js';

const isEven = (num) => (num % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const gameEven = { description, generateRound };

export default () => start(gameEven);
