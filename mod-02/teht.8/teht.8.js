function concat(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}

const names = ["Johnny", "DeeDee", "Joey", "Marky"];

const combined = concat(names);

document.write("<h3>Concatenated string:</h3>");
document.write("<p>" + combined + "</p>");
