import readlineSync from 'readline-sync';

const winsCount = 3;

const getInputMassage = (msg) => readlineSync.question(msg);

const start = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = getInputMassage('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(game.description);

  for (let i = 0; i < winsCount; i += 1) {
    const [question, rightAnswer] = game.generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = getInputMassage('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default start;
