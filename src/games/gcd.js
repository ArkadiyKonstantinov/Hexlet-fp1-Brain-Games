import getRandomInt from '../utils.js';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return a;
};

export const gcdRule = () => console.log('Find the greatest common divisor of given numbers.');

export const gcd = () => {
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const question = `${number1} ${number2}`;
  const rightAnswer = (number1 > number2) ? getGcd(number1, number2) : getGcd(number2, number1);
  const result = [question, rightAnswer];
  return result;
};
