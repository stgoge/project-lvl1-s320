import getRandomInt from '../misc/util';

const NumbersRange = {
  MIN: 0,
  MAX: 20,
};


const showRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log();
};

const getGCD = (a, b) => {
  if (b) {
    return getGCD(b, a % b);
  }
  return Math.abs(a);
};

const generateQuestion = () => {
  const a = getRandomInt(NumbersRange.MIN, NumbersRange.MAX);
  const b = getRandomInt(NumbersRange.MIN, NumbersRange.MAX);
  const gcd = getGCD(a > b ? b : a, a > b ? a : b);
  return {
    question: `${a} ${b}`,
    answer: `${gcd}`,
  };
};

module.exports = {
  showRules, generateQuestion,
};
