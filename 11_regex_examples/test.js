//Imports
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
const { anythingButANewLine, matchDate } = require("./index");

describe("Regex Examples", () => {
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

  describe("Matching Digits", () => {
    it("Case 1", () => {
      const input = "06-11-2015";
      const expected = true;
      expect(matchDate(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "10a10.2015452254";
      const expected = true;
      expect(matchDate(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "06-121-2015";
      const expected = false;
      expect(matchDate(input)).to.deep.equalInAnyOrder(expected);
    });
  });
});
