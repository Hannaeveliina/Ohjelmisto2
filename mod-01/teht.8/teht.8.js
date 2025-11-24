'use strict';

const startYear = parseInt(prompt("Enter the start year:"));
const endYear = parseInt(prompt("Enter the end year:"));

document.write("<ul>");

for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.write("<li>" + year + "</li>");
  }
}

document.write("</ul>");


