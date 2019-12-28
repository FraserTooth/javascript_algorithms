//Helps to match the test style of CodeWars
const { assert } = require("chai");
const Test = { assertEquals: assert.equal };

//Imports
const { abbreviate } = require("./index");

describe("Word Abbreviation", () => {
  Test.assertEquals(abbreviate("internationalization"), "i18n");
  Test.assertEquals(abbreviate("accessibility"), "a11y");
  Test.assertEquals(abbreviate("Accessibility"), "A11y");
  Test.assertEquals(abbreviate("elephant-ride"), "e6t-r2e");
});
