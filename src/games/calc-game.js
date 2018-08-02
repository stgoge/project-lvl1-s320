import getRandomInt from '../misc/util';

const NumbersRange = {
  MIN: 0,
  MAX: 100,
};
const Operation = [
  {
    SYMBOL: '+',
    CALC: (a, b) => a + b,
  },
  {
    SYMBOL: '-',
    CALC: (a, b) => a - b,
  },
  {
    SYMBOL: '*',
    CALC: (a, b) => a * b,
  },
];

const showRules = () => {
  console.log('What is the result of the expression?');
  console.log();
};

const generateQuestion = () => {
  const firstRandomNumber = getRandomInt(NumbersRange.MIN, NumbersRange.MAX);
  const secondRandomNumber = getRandomInt(NumbersRange.MIN, NumbersRange.MAX);
  const operationNumber = getRandomInt(0, Operation.length - 1);
  return {
    question: `${firstRandomNumber} ${Operation[operationNumber].SYMBOL} ${secondRandomNumber}`,
    answer: `${Operation[operationNumber].CALC(firstRandomNumber, secondRandomNumber)}`,
  };
};

module.exports = {
  showRules, generateQuestion,
};
