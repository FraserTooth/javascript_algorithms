//Helps to match the test style of CodeWars
const { assert } = require("chai");
const Test = { assertSimilar: assert.deepEqual };

//Imports
const { decompose } = require("./index");

describe("Word Abbreviation", () => {
  it("Passes Code Wars' Basic Tests", () => {
    Test.assertSimilar(decompose(2), null);
    console.log("Bing");
    Test.assertSimilar(decompose(7), [2, 3, 6]);
  });
  it("Passes Code Wars' Harder Tests", () => {
    Test.assertSimilar(decompose(50), [1, 3, 5, 8, 49]);
    Test.assertSimilar(decompose(4), null);
    Test.assertSimilar(decompose(44), [2, 3, 5, 7, 43]);
  });
});
