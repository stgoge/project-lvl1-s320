import getRandomint from '../util';
import gameProcess from '..';

const progressionLenght = 10;
const progressionStartsMin = 50;
const progressionStartsMax = 150;
const progressionStepMin = -10;
const progressionStepMax = 10;
const description = 'What number is missing in this progression?';

const getProgression = () => {
  const start = getRandomint(progressionStartsMin, progressionStartsMax);
  const step = getRandomint(progressionStepMin, progressionStepMax);
  let current = start;
  const progression = [];
  for (let i = 0; i < progressionLenght; i += 1) {
    progression.push(current);
    current += step;
  }
  return progression;
};

const getQuestionString = (arr, num) => {
  const newArr = arr.slice();
  newArr[num] = '..';
  return newArr.reduce((el, acc) => `${el} ${acc}`, '');
};

const generateAnswerAndQuestion = () => {
  const arr = getProgression();
  const missingNumber = getRandomint(0, progressionLenght);
  const question = getQuestionString(arr, missingNumber);
  const answer = `${arr[missingNumber]}`;
  return { question, answer };
};

export default () => gameProcess(description, generateAnswerAndQuestion);
