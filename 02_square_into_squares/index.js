/*
Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².

If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:
Examples

decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.

For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.
*/

function decompose(n) {
  const target = n * n;

  const checkPath = (num, path) => {
    console.log("New Layer");
    console.log({ num }, { path });

    let viablePath;
    //For Decending Numbers
    for (let value = num; value > 0; value--) {
      //If Output is Empty or the First Value remains larger than value under check
      if (!path[0] || path[0] > value) {
        const pathTotal = path.reduce((tot, cur) => {
          return tot + cur * cur;
        }, 0);

        const potential = pathTotal + value * value;

        //If Potential Value is the right one, exit
        if (potential === target) {
          return [value, ...path];
        } else if (potential < target) {
          return checkPath(value, [value, ...path]);
        }
      }
    }
    if (viablePath) {
      return viablePath;
    }
    return null;
  };

  return checkPath(n - 1, []);
}

module.exports = { decompose };
