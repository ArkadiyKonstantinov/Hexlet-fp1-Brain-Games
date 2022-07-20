import getRandomInt from '../utils.js';

const calcGcd = (a, b) => {
  let num1 = 0;
  let num2 = 0;
  if (a >= b) {
    num1 = a;
    num2 = b;
  } else {
    num1 = b;
    num2 = a;
  }
  if (!num2) {
    return num1;
  }

  return calcGcd(num2, num1 % num2);
};

export const description = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(calcGcd(number1, number2));
  return [question, rightAnswer];
};
