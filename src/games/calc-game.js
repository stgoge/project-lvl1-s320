import getRandomInt from '../util';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 20;
const operation = [
  {
    symbol: '+',
    calc: (a, b) => a + b,
  },
  {
    symbol: '-',
    calc: (a, b) => a - b,
  },
  {
    symbol: '*',
    calc: (a, b) => a * b,
  },
];
const gameRules = 'What is the result of the expression?';

const generateAnswerAndQuestion = () => {
  const firstRandomNumber = getRandomInt(minNumber, maxNumber);
  const secondRandomNumber = getRandomInt(minNumber, maxNumber);
  const operationNumber = getRandomInt(0, operation.length - 1);
  return {
    question: `${firstRandomNumber} ${operation[operationNumber].symbol} ${secondRandomNumber}`,
    answer: `${operation[operationNumber].calc(firstRandomNumber, secondRandomNumber)}`,
  };
};

export default () => gameProcess({ gameRules, generateAnswerAndQuestion });
