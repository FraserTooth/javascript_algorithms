//Imports
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
const { histogram } = require("./index");

describe("Histogram", () => {
  it("Histogram Simple Case 1", () => {
    const data = [1, 2, 3, 4];
    const buckets = 4;
    const min = 0;
    const max = 4.5;
    const expected = [1, 1, 1, 1];
    expect(histogram(data, buckets, min, max)).to.deep.equalInAnyOrder(
      expected
    );
  });
  it("Histogram Simple Case 2", () => {
    const data = [1, 2, 3, 4];
    const buckets = 2;
    const min = 0;
    const max = 4.5;
    const expected = [2, 2];
    expect(histogram(data, buckets, min, max)).to.deep.equalInAnyOrder(
      expected
    );
  });
  it("Histogram More Advanced Case", () => {
    const data = [0.5, 0.5, 0.3, -0.2, 1.6, 0, 0.1, 0.1, 0.6, 0.4];
    const buckets = 5;
    const min = -0.5;
    const max = 2;
    const expected = [1, 5, 3, 0, 1];
    expect(histogram(data, buckets, min, max)).to.deep.equalInAnyOrder(
      expected
    );
  });
});
