'use strict';

const numCandidates = parseInt(prompt("Enter the number of candidates:"));

const candidates = [];

for (let i = 0; i < numCandidates; i++) {
  const name = prompt(`Name for candidate ${i + 1}:`);
  candidates.push({ name: name, votes: 0 });
}

const numVoters = parseInt(prompt("Enter the number of voters:"));

for (let i = 0; i < numVoters; i++) {
  const vote = prompt(`Voter ${i + 1}, enter the name of the candidate you vote for:`);

  if (vote === "" || vote === null) {
    console.log(`Voter ${i + 1} cast an empty vote.`);
    continue;
  }

  const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
  if (candidate) {
    candidate.votes++;
  } else {
    console.log(`Voter ${i + 1} voted for an invalid candidate (${vote}). Vote ignored.`);
  }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("Results:");
for (const c of candidates) {
  console.log(`${c.name}: ${c.votes} votes`);
}
