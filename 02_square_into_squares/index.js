/*
Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².

If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:
Examples

decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.

For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.
*/

function decompose(n) {
  const target = n * n;

  const checkPath = (num, output) => {
    console.log("New Layer");
    console.log({ num }, { output });
    //For Decending Numbers
    for (let value = num; value > 0; value--) {
      //If Output is Empty or the First Value remains larger than value under check
      if (!output[0] || output[0] > value) {
        const outputTotal = output.reduce((tot, cur) => {
          return tot + cur * cur;
        }, 0);

        const potential = outputTotal + value * value;
        if (potential < target) {
          return checkPath(value, [value, ...output]);
        } else if (potential === target) {
          return [value, ...output];
        }
      }
    }
    return null;
  };

  for (let value = n - 1; value > 0; value--) {
    let checked = checkPath(value, []);
    if (checked) {
      return checked;
    }
  }
  return null;
}

module.exports = { decompose };
