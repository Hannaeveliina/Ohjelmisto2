function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

document.write("<h3>Dice roll results:</h3>");
document.write("<ul>");

let roll;
do {
  roll = rollDice();
  document.write("<li>" + roll + "</li>");
} while (roll !== 6);

document.write("</ul>");
