import getRandomint from '../util';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 100;
const answer = {
  even: 'yes',
  uneven: 'no',
};
const gameRules = `Answer "${answer.even}" if number even otherwise answer "${answer.uneven}".`;

const isEven = number => number % 2 === 0;

const generateAnswerAndQuestion = () => {
  const randomNumber = getRandomint(minNumber, maxNumber);
  return {
    question: randomNumber,
    answer: isEven(randomNumber) ? answer.even : answer.uneven,
  };
};

export default () => gameProcess({ gameRules, generateAnswerAndQuestion });
