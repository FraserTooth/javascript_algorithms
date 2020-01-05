//Imports
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
const { uniquePaths } = require("./index");

describe("Group Anagrams", () => {
  it("3 x 2 Grid", () => {
    expect(uniquePaths(3, 2)).to.equal(3);
  });
  it("7 x 3 Grid", () => {
    expect(uniquePaths(7, 3)).to.equal(28);
  });
});
