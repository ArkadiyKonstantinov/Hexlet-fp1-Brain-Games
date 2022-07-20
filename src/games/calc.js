import getRandomInt from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomInt(0, operators.length - 1);
  return operators[index];
};

const calculate = (operator, num1, num2) => {
  let result = '';
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = NaN;
      break;
  }
  return result;
};

export const description = 'What is the result of the expression?';

export const generateRound = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = String(calculate(operator, number1, number2));
  return [question, rightAnswer];
};
