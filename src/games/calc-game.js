import getRandomInt from '../util';
import gameProcess from '..';

const numbersRange = {
  min: 0,
  max: 100,
};
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

const showRules = () => {
  console.log('What is the result of the expression?');
  console.log();
};

const generateQuestion = () => {
  const firstRandomNumber = getRandomInt(numbersRange.min, numbersRange.max);
  const secondRandomNumber = getRandomInt(numbersRange.min, numbersRange.max);
  const operationNumber = getRandomInt(0, operation.length - 1);
  return {
    question: `${firstRandomNumber} ${operation[operationNumber].symbol} ${secondRandomNumber}`,
    answer: `${operation[operationNumber].calc(firstRandomNumber, secondRandomNumber)}`,
  };
};

export default () => gameProcess({ showRules, generateQuestion });
