'use strict';

const input = document.getElementById('calculation');
const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function() {
  const expression = input.value.trim(); // get text like "3+5"
  let n1, n2, answer;

  if (expression.includes('+')) {
    [n1, n2] = expression.split('+').map(Number);
    answer = n1 + n2;
  } else if (expression.includes('-')) {
    [n1, n2] = expression.split('-').map(Number);
    answer = n1 - n2;
  } else if (expression.includes('*')) {
    [n1, n2] = expression.split('*').map(Number);
    answer = n1 * n2;
  } else if (expression.includes('/')) {
    [n1, n2] = expression.split('/').map(Number);
    if (n2 === 0) {
      result.textContent = 'Cannot divide by zero!';
      return;
    }
    answer = n1 / n2;
  } else {
    result.textContent = 'Invalid expression! Use +, -, *, or /.';
    return;
  }

  if (isNaN(n1) || isNaN(n2)) {
    result.textContent = 'Please enter valid numbers!';
    return;
  }

  result.textContent = `Result: ${answer}`;
});
