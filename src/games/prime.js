import getRandomint from '../util';
import gameProcess from '..';

const minNumber = 0;
const maxNumber = 100;
const answerPrime = 'yes';
const answerComposite = 'no';
const description = `Answer "${answerPrime}" if number is prime otherwise answer "${answerComposite}".`;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateAnswerAndQuestion = () => {
  const question = getRandomint(minNumber, maxNumber);
  const answer = isPrime(question) ? answerPrime : answerComposite;
  return { question, answer };
};

export default () => gameProcess(description, generateAnswerAndQuestion);
