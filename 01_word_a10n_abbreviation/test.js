//Helps to match the test style of CodeWars
const { assert } = require("chai");
const Test = { assertEquals: assert.equal };

//Imports
const { abbreviate } = require("./index");

describe("Word Abbreviation", () => {
  it("Passes Code Wars' Basic Tests", () => {
    Test.assertEquals(abbreviate("internationalization"), "i18n");
    Test.assertEquals(abbreviate("accessibility"), "a11y");
    Test.assertEquals(abbreviate("Accessibility"), "A11y");
    Test.assertEquals(abbreviate("elephant-ride"), "e6t-r2e");
  });
  it("Passes Code Wars' Harder Tests", () => {
    Test.assertEquals(
      abbreviate("You need, need not want, to complete this code-wars mission"),
      "You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n"
    );
  });
});
