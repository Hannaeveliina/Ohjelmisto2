
const numDice = parseInt(prompt("Enter the number of dice:"));
const desiredSum = parseInt(prompt("Enter the desired sum of the dice:"));

const times = 10000;
let Count = 0;

for (let i = 0; i < times; i++) {
    let sum = 0;

    for (let j = 0; j < numDice; j++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    if (sum === desiredSum) {
        Count++;
    }
}

const probability = (Count / times) * 100;

document.write(
  "Probability to get sum " + desiredSum + " with " + numDice + " dice is " + probability.toFixed(2) + "%."
);
