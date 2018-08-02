import getRandomInt from '../misc/util';

const NumbersRange = {
  MIN: 0,
  MAX: 100,
};
const Answer = {
  EVEN: 'yes',
  UNEVEN: 'no',
};

const showRules = () => {
  console.log(`Answer "${Answer.EVEN}" if number even otherwise answer "${Answer.UNEVEN}".`);
  console.log();
};

const generateQuestion = () => {
  const randomNumber = getRandomInt(NumbersRange.MIN, NumbersRange.MAX);
  return {
    question: randomNumber,
    answer: randomNumber % 2 === 0 ? Answer.EVEN : Answer.UNEVEN,
  };
};

module.exports = {
  showRules, generateQuestion,
};
