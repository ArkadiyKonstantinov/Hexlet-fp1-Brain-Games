import getRandomInt from '../utils.js';

const calcGcd = (a, b) => {
  if (b) {
    return calcGcd(b, a % b);
  }
  return String(a);
};

export const description = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const question = `${number1} ${number2}`;
  const rightAnswer = (number1 > number2) ? (calcGcd(number1, number2)) : calcGcd(number2, number1);
  const result = [question, rightAnswer];
  return result;
};
