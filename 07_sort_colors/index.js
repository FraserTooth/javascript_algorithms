// Given an array with n objects colored red, white or blue,
// sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Follow up:

//     A rather straight forward solution is a two-pass algorithm using counting sort.
//     First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
//     Could you come up with a one-pass algorithm using only constant space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const countingSortsortColors = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!map[element]) {
      map[element] = 1;
    } else {
      map[element]++;
    }
  }

  let currenti = 0;
  for (const num in map) {
    if (map.hasOwnProperty(num)) {
      for (let x = 0; x < map[num]; x++) {
        nums[currenti] = parseInt(num);
        currenti++;
      }
    }
  }
};

const sortColors = function(nums) {
  let twos = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
    } else if (num === 2 && i < nums.length - twos) {
      nums.splice(i, 1);
      nums.push(2);
      twos++;
      i--;
    }
  }
};

module.exports = { sortColors };
