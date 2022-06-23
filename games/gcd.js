import getRandomInt from '../src/random.js';

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return a;
};

export const gameGcdRule = () => console.log('Find the greatest common divisor of given numbers.');

export const gameGcd = () => {
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const question = `${number1} ${number2}`;
  const rightAnswer = (number1 > number2) ? gcd(number1, number2) : gcd(number2, number1);
  const result = [question, rightAnswer];
  return result;
};
