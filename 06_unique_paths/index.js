// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

// Example 2:

// Input: m = 7, n = 3
// Output: 28

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//Same solution if starting at 0,0 (or 1,1) and going to top right
const uniquePaths = function(m, n) {
  let numberOfPaths = 0;

  const pathFind = (x, y) => {
    //Exit if Found a Way
    if (x === m && y === n) {
      numberOfPaths++;
      return;
    }

    //Try Right
    if (x + 1 <= m) {
      pathFind(x + 1, y);
    }

    //Try Up
    if (y + 1 <= n) {
      pathFind(x, y + 1);
    }
  };

  pathFind(1, 1);
  return numberOfPaths;
};

module.exports = { uniquePaths };
