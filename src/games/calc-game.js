import getRandomInt from '../misc/util';

const NumbersRange = {
  MIN: 0,
  MAX: 100,
};

const showRules = () => {
  console.log('What is the result of the expression?');
  console.log();
};

const generateQuestion = () => {
  const firstRandomNumber = getRandomInt(NumbersRange.MIN, NumbersRange.MAX);
  const secondRandomNumber = getRandomInt(NumbersRange.MIN, NumbersRange.MAX);
  return {
    question: `${firstRandomNumber} + ${secondRandomNumber}`,
    answer: `${firstRandomNumber + secondRandomNumber}`,
  };
};

module.exports = {
  showRules, generateQuestion,
};
