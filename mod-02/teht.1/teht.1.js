'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = parseFloat(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
}

document.write("<h3>Numbers in reverse order:</h3>");

for (let i = numbers.length - 1; i >= 0; i--) {
  document.write(numbers[i] + "<br>");
}
