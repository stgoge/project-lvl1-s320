import getRandomint from '../util';
import gameProcess from '..';

const numbersRange = {
  min: 0,
  max: 20,
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
  const a = getRandomint(numbersRange.min, numbersRange.max);
  const b = getRandomint(numbersRange.min, numbersRange.max);
  const gcd = getGCD(a > b ? b : a, a > b ? a : b);
  return {
    question: `${a} ${b}`,
    answer: `${gcd}`,
  };
};

const startGame = () => gameProcess({ showRules, generateQuestion });

export default startGame;
