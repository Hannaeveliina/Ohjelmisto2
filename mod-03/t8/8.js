'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const startButton = document.getElementById('start');
const result = document.getElementById('result');

startButton.addEventListener('click', function() {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);
  const op = operation.value;
  let answer;

  if (isNaN(n1) || isNaN(n2)) {
    result.textContent = 'Please enter valid numbers!';
    return;
  }

  if (op === 'add') {
    answer = n1 + n2;
  } else if (op === 'sub') {
    answer = n1 - n2;
  } else if (op === 'multi') {
    answer = n1 * n2;
  } else if (op === 'div') {
    if (n2 === 0) {
      result.textContent = 'Cannot divide by zero!';
      return;
    }
    answer = n1 / n2;
  }

  result.textContent = `Result: ${answer}`;
});
