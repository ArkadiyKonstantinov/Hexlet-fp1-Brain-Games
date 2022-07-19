import getRandomInt from '../utils.js';

export const description = 'What is the result of the expression?';

export const generateRound = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  let rightAnswer = '';
  switch (operator) {
    case '+':
      rightAnswer = String(number1 + number2);
      break;
    case '-':
      rightAnswer = String(number1 - number2);
      break;
    default:
      rightAnswer = String(number1 * number2);
      break;
  }
  const question = `${number1} ${operator} ${number2}`;
  return [question, rightAnswer];
};
