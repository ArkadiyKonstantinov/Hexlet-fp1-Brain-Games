import readlineSync from 'readline-sync';

const getRandomInt = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min) + min);
};

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const answersToWin = 3;
let rightAnswersCount = 0;

do {
  const number = getRandomInt();
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
