import getRandomint from '../util';
import gameProcess from '..';

const numbersRange = {
  min: 0,
  max: 100,
};
const answer = {
  even: 'yes',
  uneven: 'no',
};

const isEven = number => number % 2 === 0;

const showRules = () => {
  console.log(`Answer "${answer.even}" if number even otherwise answer "${answer.uneven}".`);
  console.log();
};

const generateQuestion = () => {
  const randomNumber = getRandomint(numbersRange.min, numbersRange.max);
  return {
    question: randomNumber,
    answer: isEven(randomNumber) ? answer.even : answer.uneven,
  };
};

const startGame = () => gameProcess({ showRules, generateQuestion });

export default startGame;
