import getRandomint from '../util';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 20;
const gameRules = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const inner = (first, second) => {
    if (second) {
      return inner(second, first % second);
    }
    return Math.abs(first);
  };
  return inner(a > b ? b : a, a > b ? a : b);
};

const generateAnswerAndQuestion = () => {
  const a = getRandomint(minNumber, maxNumber);
  const b = getRandomint(minNumber, maxNumber);
  const gcd = getGCD(a, b);
  return {
    question: `${a} ${b}`,
    answer: `${gcd}`,
  };
};

export default () => gameProcess({ gameRules, generateAnswerAndQuestion });
