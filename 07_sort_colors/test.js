//Imports
const chai = require("chai");
const { expect } = chai;
const { sortColors } = require("./index");
Array.sortColors = sortColors;

describe("Sort Colours", () => {
  it("Example Case", () => {
    const input = [2, 0, 2, 1, 1, 0];
    const output = [0, 0, 1, 1, 2, 2];
    Array.sortColors(input);
    expect(input).to.deep.equal(output);
  });
});
