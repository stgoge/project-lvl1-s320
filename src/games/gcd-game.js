import getRandomint from '../util';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 20;
const description = 'Find the greatest common divisor of given numbers.';

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
  const question = `${a} ${b}`;
  const answer = `${gcd}`;
  return { question, answer };
};

export default () => gameProcess({ description, generateAnswerAndQuestion });
