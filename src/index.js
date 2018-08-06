import readlineSync from 'readline-sync';

const rightAnswersForWin = 3;

const showWrongMessage = (userAnswer, answer, name) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const gameProcess = (description, generateAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  console.log();
  for (let i = 0; i < rightAnswersForWin; i += 1) {
    const { question, answer } = generateAnswerAndQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      showWrongMessage(userAnswer, answer, actualName);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${actualName}!`);
};

export default gameProcess;
