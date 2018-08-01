import readlineSync from 'readline-sync';

export const askName = () => {
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  console.log();
  return actualName;
};

export const evenGame = () => {
  const NumbersRange = {
    MIN: 0,
    MAX: 100,
  };
  const Answer = {
    EVEN: 'yes',
    UNEVEN: 'no',
  };
  const RIGHT_ANSWERS_FOR_WIN = 3;

  const getRandomInt = () => Math.floor(Math.random() * NumbersRange.MAX) + NumbersRange.MIN;

  console.log(`Answer "${Answer.EVEN}" if number even otherwise answer "${Answer.UNEVEN}".`);
  console.log();

  const actualName = askName();
  const showWrongMessage = (answer, rightAnswer) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${actualName}!`);
  };

  let randomNumber;
  let answer;
  let rightAnswer;

  for (let i = 0; i < RIGHT_ANSWERS_FOR_WIN; i += 1) {
    randomNumber = getRandomInt();
    rightAnswer = randomNumber % 2 === 0 ? Answer.EVEN : Answer.UNEVEN;
    console.log(`Question: ${randomNumber}`);
    answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      showWrongMessage(answer, rightAnswer);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${actualName}!`);
};
