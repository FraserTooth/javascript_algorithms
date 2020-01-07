//Imports
const chai = require("chai");
const { expect } = chai;
const { letterCombinations } = require("./index");

describe("Letter Combinations", () => {
  it("Example Case", () => {
    const input = "23";
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(letterCombinations(input)).to.deep.equal(expected);
  });
});
