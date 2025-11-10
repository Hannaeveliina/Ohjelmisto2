const numbers = [];

while (true) {
  const input = parseFloat(prompt("Enter a number:"));

  if (numbers.includes(input)) {
    alert("You already entered this number! Program will stop.");
    break;
  }

  numbers.push(input);
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
}

document.write("<h3>All numbers in ascending order:</h3>");
document.write("<ul>");
for (let i = 0; i < numbers.length; i++) {
  document.write("<li>" + numbers[i] + "</li>");
}
document.write("</ul>");
