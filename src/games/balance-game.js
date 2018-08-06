import getRandomInt from '../util';
import gameProcess from '..';

const minNumber = 100;
const maxNumber = 1000;
const description = 'Balance the given number.';

const getBalancedNumber = (number) => {
  const digits = number.toString().split('').map(Number);
  const sum = digits.reduce((acc, digit) => digit + acc, 0);
  const digitsCount = digits.length;
  const big = Math.ceil(sum / digitsCount);
  const bigCount = sum - digitsCount * (big - 1);
  const newDigits = [];
  for (let i = 0; i < digitsCount; i += 1) {
    newDigits.unshift(i < bigCount ? big : big - 1);
  }
  return newDigits.reduce((el, acc) => `${el}${acc}`, '');
};

const generateAnswerAndQuestion = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = getBalancedNumber(question);
  return { question, answer };
};

export default () => gameProcess(description, generateAnswerAndQuestion);
