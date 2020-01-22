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
    it("Empty Case", () => {
      const input = null;
      const expected = "[]";

      const output = serialize(input);

      expect(output).to.deep.equal(expected);
    });
    it("Falsy Case", () => {
      const input = {
        val: -1,
        left: { val: 0, left: null, right: null },
        right: { val: 1, left: null, right: null }
      };
      const expected = "[-1,0,1]";

      const output = serialize(input);

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
    it("Empty Case", () => {
      const expected = null;

      const input = "[]";
      const output = deserialize(input);

      expect(output).to.deep.equal(expected);
    });
    it("Falsy Case", () => {
      const input = "[-1,0,1]";
      const expected = {
        val: -1,
        left: { val: 0, left: null, right: null },
        right: { val: 1, left: null, right: null }
      };

      const output = deserialize(input);

      expect(output).to.deep.equal(expected);
    });
    it("Bigger Falsy Case", () => {
      const input =
        "[0,0,0,0,null,null,1,null,null,null,null,null,null,null,2]";
      const expected = {
        val: 0,
        left: {
          val: 0,
          left: {
            val: 0,
            left: null,
            right: null
          },
          right: null
        },
        right: {
          val: 0,
          left: null,
          right: {
            val: 1,
            left: null,
            right: {
              val: 2,
              left: null,
              right: null
            }
          }
        }
      };

      const output = deserialize(input);

      expect(output).to.deep.equal(expected);
    });
  });
});
