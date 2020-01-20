//Imports
const { expect } = require("chai");
const { inorderTraversal } = require("./index");

describe("Odd Even Linked List", () => {
  it("Base Case", () => {
    const input = {
      val: 1,
      left: null,
      right: { val: 2, left: { val: 3, left: null, right: null }, right: null }
    };

    const output = inorderTraversal(input);

    const expected = [1, 3, 2];

    expect(output).to.deep.equal(expected);
  });
  it("One Node Case", () => {
    const input = {
      val: 1,
      left: null,
      right: null
    };

    const output = inorderTraversal(input);

    const expected = [1];

    expect(output).to.deep.equal(expected);
  });
  it("Empty Case", () => {
    const input = undefined;

    const output = inorderTraversal(input);

    const expected = [];

    expect(output).to.deep.equal(expected);
  });
});
