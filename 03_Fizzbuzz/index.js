/*
El Classico

Returns a string with 1 to n printed, with newlines after each value

Divisible by 3 Fizz
Divisible by 5 Buzz
Divisible by both FizzBuzz
*/

function fizzBuzz(n) {
  let outputString = "";
  for (x of Array(n).keys()) {
    const divisibleBy3 = (x + 1) % 3 === 0;
    const divisibleBy5 = (x + 1) % 5 === 0;
    outputString +=
      divisibleBy3 && divisibleBy5
        ? "FizzBuzz"
        : divisibleBy3
        ? "Fizz"
        : divisibleBy5
        ? "Buzz"
        : x + 1;
    outputString += "\n";
  }
  return outputString;
}

module.exports = { fizzBuzz };
