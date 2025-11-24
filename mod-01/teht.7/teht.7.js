'use strict';

let rolls = parseInt(prompt("How many dice do you want to roll?"));

    let sum = 0;

    for (let i = 0; i < rolls; i++) {

        const roll = Math.floor(Math.random() * 6) + 1;
      sum += roll;
    }

    document.write("The sum of " + rolls + " dice rolls is " + sum + ".");