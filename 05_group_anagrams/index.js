// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note:

//     All inputs will be in lowercase.
//     The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const isAnagram = (inputWord, compareTo) => {
  //Handle Empty Strings
  if (inputWord.length === 0) {
    if (compareTo.length === 0) {
      return true;
    } else {
      return false;
    }
  } else if (inputWord.length !== compareTo.length) {
    return false;
  }
  const inputLetters = [...inputWord];
  for (let index = 0; index < inputLetters.length; index++) {
    const letter = inputLetters[index];
    const compare = new RegExp(letter, "g");
    const inputCount = (inputWord.match(compare) || []).length;
    const compCount = (compareTo.match(compare) || []).length;
    if (inputCount !== compCount) return false;
  }
  return true;
};

const groupAnagrams = function(strs) {
  const output = [[strs[0]]];

  for (let index = 1; index < strs.length; index++) {
    const string = strs[index];
    let anagram = false;

    for (let outputIndex = 0; outputIndex < output.length; outputIndex++) {
      const mappedString = output[outputIndex][0];
      if (isAnagram(string, mappedString)) {
        output[outputIndex].push(string);
        anagram = true;
      }
    }
    if (!anagram) output.push([string]);
  }

  return output;
};

module.exports = { groupAnagrams, isAnagram };
