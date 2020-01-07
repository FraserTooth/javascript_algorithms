// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given in the attached png
// Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  keymap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  const output = [];
  const nums = digits.split("").filter(num => {
    //Remove All Ones
    return num !== "1";
  });

  const findCombos = (numsLeft, stringSoFar = "") => {
    //Base Case
    if (numsLeft.length === 0) {
      output.push(stringSoFar);
      return;
    }

    const currentNum = numsLeft[0];
    //Dive
    if (keymap.hasOwnProperty(currentNum)) {
      const possibleLetters = keymap[currentNum];
      possibleLetters.forEach(letter => {
        findCombos(numsLeft.slice(1, numsLeft.length), stringSoFar + letter);
      });
    }
  };

  findCombos(nums);

  return output;
};

module.exports = { letterCombinations };
