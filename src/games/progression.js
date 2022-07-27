import getRandomInt from '../utils.js';
import start from '../index.js';

const getProgression = (startNum, increment, missingNumberPosition, length) => {
  const result = [startNum];
  for (let i = 0; i < length; i += 1) {
    result.push(result[i] + increment);
  }
  result[missingNumberPosition - 1] = '..';
  return result.join(' ');
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionLength = getRandomInt(5, 10);
  const startNumber = getRandomInt(1, 19);
  const increment = getRandomInt(1, 10);
  const missingNumberPosition = getRandomInt(1, 10);
  const question = getProgression(startNumber, increment, missingNumberPosition, progressionLength);
  const rightAnswer = String(startNumber + (increment * (missingNumberPosition - 1)));

  return [question, rightAnswer];
};

const gameProgresion = { description, generateRound };

export default () => start(gameProgresion);
