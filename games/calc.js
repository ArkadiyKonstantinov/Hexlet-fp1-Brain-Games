import readlineSync from 'readline-sync';
import getName from '../src/cli.js';
import getRandomInt from '../src/random.js';

const gameCalc = () => {
  const userName = getName();
  const operators = ['+', '-', '*'];
  let rightAnswer = '';

  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const operator = operators[Math.floor(Math.random() * operators.length)];
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
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer.toString()) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default gameCalc;
