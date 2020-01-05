//Imports
const { expect } = require("chai");
const { addTwoNumbers } = require("./index");

describe("Add Two Numbers", () => {
  it("Base Case", () => {
    //Quick and Dirty Linked Lists
    // const l1 = [2, 4, 3];
    const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
    // const l2 = [5, 6, 4];
    const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

    const output = addTwoNumbers(l1, l2);
    // const expected = [7, 0, 8];
    const expected = { val: 7, next: { val: 0, next: { val: 8, next: null } } };
    expect(output).to.deep.equal(expected);
  });
  it("Bumps Up Properly when no higher value", () => {
    //Quick and Dirty Linked Lists
    // const l1 = [5];
    const l1 = { val: 5, next: null };
    // const l2 = [5];
    const l2 = { val: 5, next: null };

    const output = addTwoNumbers(l1, l2);
    // const expected = [0,1];
    const expected = { val: 0, next: { val: 1, next: null } };
    expect(output).to.deep.equal(expected);
  });
  it("Resets Current Value Properly", () => {
    //Quick and Dirty Linked Lists
    // const l1 = [9];
    const l1 = { val: 9, next: null };
    // const l2 = [9];
    const l2 = { val: 9, next: null };

    const output = addTwoNumbers(l1, l2);
    // const expected = [8,1];
    const expected = { val: 8, next: { val: 1, next: null } };
    expect(output).to.deep.equal(expected);
  });
});
