import getRandomInt from '../utils.js';

export const primeRule = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const prime = () => {
  const number = getRandomInt(2, 19);
  const question = `${number}`;
  let rightAnswer = 'yes';
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      rightAnswer = 'no';
      break;
    }
  }
  const result = [question, rightAnswer];
  return result;
};
