//Imports
const { expect } = require("chai");
const { groupAnagrams } = require("./index");

describe("Group Anagrams", () => {
  it("Base Case", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

    const output = groupAnagrams(input);
    const expected = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]];
    expect(output).to.deep.equal(expected);
  });
});
