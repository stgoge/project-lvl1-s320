import readlineSync from 'readline-sync';

const askName = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
};

export default askName;
