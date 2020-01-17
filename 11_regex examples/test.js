//Imports
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
const { anythingButANewLine } = require("./index");

describe("Anything But a Newline", () => {
  it("Case 1", () => {
    const input = "123.456.abc.def";
    const expected = true;
    expect(anythingButANewLine(input)).to.deep.equalInAnyOrder(expected);
  });
  it("Case 2", () => {
    const input = "1123.456.abc.def";
    const expected = false;
    expect(anythingButANewLine(input)).to.deep.equalInAnyOrder(expected);
  });
  it("Case 3", () => {
    const input = "123.456.abc.deff";
    const expected = false;
    expect(anythingButANewLine(input)).to.deep.equalInAnyOrder(expected);
  });
});

//123.456.abc.def
