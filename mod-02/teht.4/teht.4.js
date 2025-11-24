'use strict';

const numbers = [];

while (true) {
  const input = parseFloat(prompt("Enter a number (0 to stop):"));

  if (input === 0) {
    break;
  }

  numbers.push(input);
}

numbers.sort((a, b) => b - a);

document.write("<h3>Numbers from largest to smallest:</h3>");
document.write("<ul>");
for (let i = 0; i < numbers.length; i++) {
  document.write("<li>" + numbers[i] + "</li>");
}
document.write("</ul>");

