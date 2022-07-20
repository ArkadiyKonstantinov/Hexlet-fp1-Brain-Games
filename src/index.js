import readlineSync from 'readline-sync';

const winsCount = 3;

const input = (msg) => readlineSync.question(msg);
const output = (msg) => console.log(msg);

const start = (game) => {
  output('Welcome to the Brain Games!');
  const userName = input('May I have your name? ');
  output(`Hello, ${userName}!`);
  output(game.description);

  for (let i = 1; i <= winsCount; i += 1) {
    const [question, rightAnswer] = game.generateRound();
    output(`Question: ${question}`);
    const userAnswer = input('Your answer: ');
    if (userAnswer !== rightAnswer) {
      output(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      output(`Let's try again, ${userName}!`);
      return;
    }
    output('Correct!');
  }
  output(`Congratulations, ${userName}!`);
};

export default start;
