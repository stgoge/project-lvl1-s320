import getRandomint from '../util';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 100;
const answers = {
  even: 'yes',
  uneven: 'no',
};
const description = `Answer "${answers.even}" if number even otherwise answer "${answers.uneven}".`;

const isEven = number => number % 2 === 0;

const generateAnswerAndQuestion = () => {
  const question = getRandomint(minNumber, maxNumber);
  const answer = isEven(question) ? answers.even : answers.uneven;
  return { question, answer };
};

export default () => gameProcess(description, generateAnswerAndQuestion);
