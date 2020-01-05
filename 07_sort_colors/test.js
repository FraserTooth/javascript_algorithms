//Imports
const chai = require("chai");
const { expect } = chai;
const { sortColors } = require("./index");

describe("Group Anagrams", () => {
  it("Example Case", () => {
    const input = [2, 0, 2, 1, 1, 0];
    const output = [0, 0, 1, 1, 2, 2];
    expect(sortColors(input)).to.equal(output);
  });
});
