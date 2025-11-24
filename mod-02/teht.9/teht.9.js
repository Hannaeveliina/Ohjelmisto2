'use strict';

function even(numbers) {
  const evenNumbers = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

const originalArray = [2, 7, 4, 9, 10, 13, 6];

const evenArray = even(originalArray);

console.log("Original array:", originalArray);
console.log("Even numbers array:", evenArray);
