import getRandomInt from '../random.js';

export const calcRule = () => console.log('What is the result of the expression?');

export const calc = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, 2)];
  let rightAnswer = '';
  switch (operator) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    default:
      rightAnswer = number1 * number2;
      break;
  }
  const question = `${number1} ${operator} ${number2}`;
  const result = [question, rightAnswer];
  return result;
};