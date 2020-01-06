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

  it("Other Cases - 01", () => {
    const input = [1, 2, 0];
    const output = [0, 1, 2];
    Array.sortColors(input);
    expect(input).to.deep.equal(output);
  });

  it("Other Cases - 02", () => {
    const input = [2, 2, 1];
    const output = [1, 2, 2];
    Array.sortColors(input);
    expect(input).to.deep.equal(output);
  });

  it("Only 0 and 1", () => {
    const input = [1, 0, 0, 1, 1, 0];
    const output = [0, 0, 0, 1, 1, 1];
    Array.sortColors(input);
    expect(input).to.deep.equal(output);
  });

  it("Only 0", () => {
    const input = [0, 0, 0];
    const output = [0, 0, 0];
    Array.sortColors(input);
    expect(input).to.deep.equal(output);
  });

  it("Empty Array", () => {
    const input = [];
    const output = [];
    Array.sortColors(input);
    expect(input).to.deep.equal(output);
  });
});
