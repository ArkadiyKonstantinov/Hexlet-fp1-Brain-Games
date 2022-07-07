import getRandomInt from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const number = getRandomInt(2, 19);
  const question = `${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const result = [question, rightAnswer];
  return result;
};
