//Imports
const { expect } = require("chai");
const { serialize, deserialize } = require("./index");

describe("Serialize, Deserialize Binary Tree", () => {
  describe("Serialize", () => {
    it("Base Case", () => {
      const input = {
        val: 1,
        left: null,
        right: {
          val: 2,
          left: { val: 3, left: null, right: null },
          right: null
        }
      };

      const output = serialize(input);

      const expected = "[1,null,2,null,null,3]";

      expect(output).to.deep.equal(expected);
    });

    it("Example Case", () => {
      const input = {
        val: 1,
        left: {
          val: 2,
          left: null,
          right: null
        },
        right: {
          val: 3,
          left: {
            val: 4,
            left: null,
            right: null
          },
          right: {
            val: 5,
            left: null,
            right: null
          }
        }
      };

      const output = serialize(input);

      const expected = "[1,2,3,null,null,4,5]";

      expect(output).to.deep.equal(expected);
    });
  });

  describe("Deserialize", () => {
    it("Base Case", () => {
      const expected = {
        val: 1,
        left: null,
        right: {
          val: 2,
          left: { val: 3, left: null, right: null },
          right: null
        }
      };

      const input = "[1,null,2,null,null,3]";
      const output = deserialize(input);

      expect(output).to.deep.equal(expected);
    });

    it("Example Case", () => {
      const expected = {
        val: 1,
        left: {
          val: 2,
          left: null,
          right: null
        },
        right: {
          val: 3,
          left: {
            val: 4,
            left: null,
            right: null
          },
          right: {
            val: 5,
            left: null,
            right: null
          }
        }
      };
      const input = "[1,2,3,null,null,4,5]";

      const output = deserialize(input);

      expect(output).to.deep.equal(expected);
    });
  });
});
