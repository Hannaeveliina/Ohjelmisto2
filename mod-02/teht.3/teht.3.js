'use strict';

const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt(`Enter the name of dog ${i + 1}:`);
  dogs.push(name);
}

dogs.sort();
dogs.reverse();

document.write("<h3>Dog names in reverse alphabetical order:</h3>");
document.write("<ul>");
for (let i = 0; i < dogs.length; i++) {
  document.write("<li>" + dogs[i] + "</li>");
}
document.write("</ul>");
