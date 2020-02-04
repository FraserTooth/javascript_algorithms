//Imports
const { expect } = require("chai");
const { lengthOfLongestSubstring } = require("./index");

describe("Longest Substring without Repeats", () => {
  describe("Serialize", () => {
    it("Base Case", () => {
      const input = "abcabcbb";

      const output = lengthOfLongestSubstring(input);

      const expected = 3;

      expect(output).to.deep.equal(expected);
    });

    it("Single Letter Case", () => {
      const input = "bbbbbbbb";

      const output = lengthOfLongestSubstring(input);

      const expected = 1;

      expect(output).to.deep.equal(expected);

    });
    it("Empty Case", () => {
      const input = null;
      const expected = 0;

      const output = lengthOfLongestSubstring(input);

      expect(output).to.deep.equal(expected);

      const input2 = "";
      const expected2 = 0;

      const output2 = lengthOfLongestSubstring(input2);

      expect(output2).to.deep.equal(expected2);
    });
    it("Example 2", () => {
      const input = "pwwkew";
      const expected = 3;

      const output = lengthOfLongestSubstring(input);

      expect(output).to.deep.equal(expected);
    });
    it("Example 3", () => {
      const input = "aab";
      const expected = 2;

      const output = lengthOfLongestSubstring(input);

      expect(output).to.deep.equal(expected);
    });
  });
});
