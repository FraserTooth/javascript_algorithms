//Imports
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
const { groupAnagrams, isAnagram } = require("./index");

describe("Group Anagrams", () => {
  it("Base Case", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

    const output = groupAnagrams(input);
    const expected = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]];
    expect(output).to.deep.equalInAnyOrder(expected);
  });
});

describe("Testing Anagram Detector", () => {
  it("Detects Correct", () => {
    expect(isAnagram("base", "easb")).to.be.true;
  });
  it("Rejects Correctly", () => {
    expect(isAnagram("base", "case")).to.be.false;
  });
});
