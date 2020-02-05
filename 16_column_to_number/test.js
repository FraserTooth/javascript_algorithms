//Imports
const { expect } = require("chai");
const { titleToNumber } = require("./index");

describe("Column To Number", () => {
    it("Base Case", () => {
      const input = "A";

      const output = titleToNumber(input);

      const expected = 1;

      expect(output).to.deep.equal(expected);

      const input2 = "Z";

      const output2 = titleToNumber(input2);

      const expected2 = 26;

      expect(output2).to.deep.equal(expected2);
    });
    it("Empty Case", () => {
      const input = null;
      const expected = 0;

      const output = titleToNumber(input);

      expect(output).to.deep.equal(expected);

      const input2 = "";
      const expected2 = 0;

      const output2 = titleToNumber(input2);

      expect(output2).to.deep.equal(expected2);
    });
    it("Example 2", () => {
      const input = "AB";
      const expected = 28;

      const output = titleToNumber(input);

      expect(output).to.deep.equal(expected);
    });
    it("Example 3", () => {
      const input = "ZY";
      const expected = 701;

      const output = titleToNumber(input);

      expect(output).to.deep.equal(expected);
    });
    it("Example 4", () => {
      const input = "AAA";
      const expected = 703;

      const output = titleToNumber(input);

      expect(output).to.deep.equal(expected);
    });
});
