import getRandomInt from '../util';
import gameProcess from '..';

const minNumber = 100;
const maxNumber = 1000;
const description = 'Balance the given number.';

const getBalancedNumber = (number) => {
  const digits = number.toString().split('').map(el => parseInt(el, 10));
  const doBalance = (digs) => {
    let min = { element: digs[0], i: 0 };
    let max = { element: digs[0], i: 0 };
    digs.forEach((element, i) => {
      if (element > max.element) max = { element, i };
      if (element < min.element) min = { element, i };
    });
    if (max.element - min.element < 2) return digs;
    const newDigs = digs.slice();
    newDigs[max.i] -= 1;
    newDigs[min.i] += 1;
    return doBalance(newDigs);
  };
  return doBalance(digits).sort().reduce((el, acc) => `${el}${acc}`, '');
};

const generateAnswerAndQuestion = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = getBalancedNumber(question);
  return { question, answer };
};

export default () => gameProcess({ description, generateAnswerAndQuestion });
