'use strict';

const number = parseInt(prompt("Enter an integer:"));
    let isPrime = true;

    if (number < 2) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      document.write(number + " is a prime number.");
    } else {
      document.write(number + " is not a prime number.");
    }