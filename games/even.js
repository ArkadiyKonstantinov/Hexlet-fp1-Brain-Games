import readlineSync from 'readline-sync';
import getName from '../src/cli.js';
import getRandomInt from '../src/random.js';

const gameEven = () => {
  const userName = getName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const answersToWin = 3;
  let rightAnswersCount = 0;

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomInt(1, 100);
    const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    }
  }

  do {
    const number = getRandomInt(1, 100);
    const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      rightAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      rightAnswersCount = 0;
    }
  } while (rightAnswersCount < answersToWin);
  console.log(`Congratulations, ${userName}!`);
};

export default gameEven;
