import readlineSync from 'readline-sync';

export const askName = () => {
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  console.log();
  return actualName;
};

export const gameProcess = (game) => {
  const RIGHT_ANSWERS_FOR_WIN = 3;
  console.log('Welcome to the Brain Games!');
  const actualName = askName();
  game.showRules();
  const showWrongMessage = (userAnswer, answer) => {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${actualName}!`);
  };

  let ask;
  let userAnswer;

  for (let i = 0; i < RIGHT_ANSWERS_FOR_WIN; i += 1) {
    ask = game.generateQuestion();
    console.log(`Question: ${ask.question}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== ask.answer) {
      showWrongMessage(userAnswer, ask.answer);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${actualName}!`);
};
