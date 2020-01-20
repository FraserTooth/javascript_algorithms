//Imports
const { expect } = require("chai");
const { oddEvenList } = require("./index");

describe("Add Two Numbers", () => {
  it("Base Case", () => {
    // Input: 1->2->3->4->5->NULL
    const input = {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
      }
    };

    const output = oddEvenList(input);

    // Output: 1->3->5->2->4->NULL
    const expected = {
      val: 1,
      next: {
        val: 3,
        next: { val: 5, next: { val: 2, next: { val: 4, next: null } } }
      }
    };

    expect(output).to.deep.equal(expected);
  });
});
