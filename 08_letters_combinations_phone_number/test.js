//Imports
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
const { letterCombinations } = require("./index");

describe("Letter Combinations", () => {
  it("Example Case", () => {
    const input = "23";
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(letterCombinations(input)).to.deep.equalInAnyOrder(expected);
  });
  it("Simple Case", () => {
    const input = "9";
    const expected = ["w", "x", "y", "z"];
    expect(letterCombinations(input)).to.deep.equalInAnyOrder(expected);
  });
  it("Handle 1s Case", () => {
    const input = "911";
    const expected = ["w", "x", "y", "z"];
    expect(letterCombinations(input)).to.deep.equalInAnyOrder(expected);
  });
  it("Handle Empty Array", () => {
    const input = "";
    const expected = [];
    expect(letterCombinations(input)).to.deep.equalInAnyOrder(expected);
  });
  it("Repeated Case", () => {
    const input = "222";
    const expected = [
      "aaa",
      "aab",
      "aac",
      "aba",
      "abb",
      "abc",
      "aca",
      "acb",
      "acc",
      "baa",
      "bab",
      "bac",
      "bba",
      "bbb",
      "bbc",
      "bca",
      "bcb",
      "bcc",
      "caa",
      "cab",
      "cac",
      "cba",
      "cbb",
      "cbc",
      "cca",
      "ccb",
      "ccc"
    ];
    expect(letterCombinations(input)).to.deep.equalInAnyOrder(expected);
  });
});
