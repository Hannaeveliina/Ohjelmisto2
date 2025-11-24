'use strict';

const sides = parseInt(prompt("Enter the number of sides on the dice:"));

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

document.write(`<h3>Rolling a ${sides}-sided dice:</h3>`);
document.write("<ul>");

let roll;
do {
  roll = rollDice(sides);
  document.write("<li>" + roll + "</li>");
} while (roll !== sides);

document.write("</ul>");
document.write(`<p>The dice landed on the maximum number (${sides})! 🎉</p>`);
