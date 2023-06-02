const readlineSync = require('readline-sync');

function calculator() {
  console.log('Welcome to the Calculator Program!');
  const operation = readlineSync.question('What operation would you like to perform? (+, -, *, /): ');

  if (!['+', '-', '*', '/'].includes(operation)) {
    console.log('That is not a valid operation');
    return calculator();
  }

  let firstNumber;
  while (true) {
    firstNumber = readlineSync.question('Please enter the first number: ');
    if (!isNaN(firstNumber)) {
      break;
    }
    console.log('This is not a number');
  }

  let secondNumber;
  while (true) {
    secondNumber = readlineSync.question('Please enter the second number: ');
    if (!isNaN(secondNumber)) {
      break;
    }
    console.log('This is not a number');
  }

  const result = performOperation(parseFloat(firstNumber), parseFloat(secondNumber), operation);
  console.log('The result is:', result);
}

function performOperation(num1, num2, operation) {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      break;
  }
  return result;
}

calculator();

console.log('Thanks for using the calculator!');