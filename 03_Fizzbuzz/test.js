//Imports
const { expect } = require("chai");
const { fizzBuzz } = require("./index");

describe("Fizz Buzz", () => {
  it("Works for n=5", () => {
    const output = fizzBuzz(5);
    const expected = `1\n2\nFizz\n4\nBuzz\n`;
    expect(output).to.equal(expected);
  });
  it("Works for n=10", () => {
    const output = fizzBuzz(10);
    const expected = `1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n`;
    expect(output).to.equal(expected);
  });
  it("Works for n=15", () => {
    const output = fizzBuzz(15);
    const expected = `1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n`;
    expect(output).to.equal(expected);
  });
});
