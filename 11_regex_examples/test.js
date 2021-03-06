//Imports
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
const {
  anythingButANewLine,
  matchDate,
  setOfInitials,
  wordAndNon,
  stringOfLength,
  subsetChars,
  antiSubsetChars,
  charRange,
  matchRepititions,
  matchVariableRepititions,
  matchZeroOrMoreRepititions,
  matchOneOrMoreRepititions,
  regexGroups,
  alternativeMatching
} = require("./index");

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

  describe("Set of Intials", () => {
    it("Case 1", () => {
      const input = "AB CD EF";
      const expected = true;
      expect(setOfInitials(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "AB CDD EF";
      const expected = false;
      expect(setOfInitials(input)).to.deep.equalInAnyOrder(expected);
    });
  });

  describe("Words and Non Words", () => {
    it("Case 1", () => {
      const input = "www.hackerrank.com";
      const expected = true;
      expect(wordAndNon(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "www.hackerasgrank.com";
      const expected = false;
      expect(wordAndNon(input)).to.deep.equalInAnyOrder(expected);
    });
  });

  describe("String of Certain Length", () => {
    it("Case 1", () => {
      const input = "0qwer.";
      const expected = true;
      expect(stringOfLength(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "Aqwer.";
      const expected = false;
      expect(stringOfLength(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "0qwer.a";
      const expected = false;
      expect(stringOfLength(input)).to.deep.equalInAnyOrder(expected);
    });
  });

  describe("Subset of Characters Match", () => {
    it("Case 1", () => {
      const input = "1203x.";
      const expected = true;
      expect(subsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "2203x.";
      const expected = true;
      expect(subsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "1003x.";
      const expected = true;
      expect(subsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 4", () => {
      const input = "1003x,";
      const expected = true;
      expect(subsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 5", () => {
      const input = "1003u,";
      const expected = true;
      expect(subsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 6", () => {
      const input = "100Au,";
      const expected = true;
      expect(subsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 7", () => {
      const input = "10sAu,";
      const expected = true;
      expect(subsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
  });

  describe("String without subset", () => {
    it("Case 1", () => {
      const input = "think?";
      const expected = true;
      expect(antiSubsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "think.";
      const expected = false;
      expect(antiSubsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "0hink?";
      const expected = false;
      expect(antiSubsetChars(input)).to.deep.equalInAnyOrder(expected);
    });
  });

  describe("Char Ranges", () => {
    it("Case 1", () => {
      const input = "h4CkR";
      const expected = true;
      expect(charRange(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "h4Ckr";
      const expected = false;
      expect(charRange(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "H4CkR";
      const expected = false;
      expect(charRange(input)).to.deep.equalInAnyOrder(expected);
    });
  });

  describe("Repititions", () => {
    it("Case 1", () => {
      const input = "2222222222aaaaaaaaaa2222222222aaaaaaaaaa13 57";
      const expected = true;
      expect(matchRepititions(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "2222222222aaaannaaaa2222222222aaaaaaaaaa13 57";
      const expected = true;
      expect(matchRepititions(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "2222222222aaaaaaaaaa2222222222aaaaaaaaba13n57";
      const expected = false;
      expect(matchRepititions(input)).to.deep.equalInAnyOrder(expected);
    });
  });

  describe("Variable Repititions", () => {
    it("Case 1", () => {
      const input = "3threeormorealphabets.";
      const expected = true;
      expect(matchVariableRepititions(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "23hTyjoSDJGIOASOANGIAOVNADNVKJLADNKV...";
      const expected = true;
      expect(matchVariableRepititions(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "214KJASDNGKJAG...";
      const expected = false;
      expect(matchVariableRepititions(input)).to.deep.equalInAnyOrder(expected);
    });
  });

  describe("Zero or More Repititions", () => {
    it("Case 1", () => {
      const input = "14";
      const expected = true;
      expect(matchZeroOrMoreRepititions(input)).to.deep.equalInAnyOrder(
        expected
      );
    });
    it("Case 2", () => {
      const input = "14436546jasntjkastAJASGKLAJN";
      const expected = true;
      expect(matchZeroOrMoreRepititions(input)).to.deep.equalInAnyOrder(
        expected
      );
    });
    it("Case 3", () => {
      const input = "1523613Ab";
      const expected = false;
      expect(matchZeroOrMoreRepititions(input)).to.deep.equalInAnyOrder(
        expected
      );
    });
  });
  describe("One or More Repititions", () => {
    it("Case 1", () => {
      const input = "14AAlll";
      const expected = true;
      expect(matchOneOrMoreRepititions(input)).to.deep.equalInAnyOrder(
        expected
      );
    });
    it("Case 2", () => {
      const input = "1Aa";
      const expected = true;
      expect(matchOneOrMoreRepititions(input)).to.deep.equalInAnyOrder(
        expected
      );
    });
    it("Case 3", () => {
      const input = "AAABbbbb";
      const expected = false;
      expect(matchOneOrMoreRepititions(input)).to.deep.equalInAnyOrder(
        expected
      );
    });
  });
  describe("Regex Groups", () => {
    it("Case 1", () => {
      const input = "okokok";
      const expected = true;
      expect(regexGroups(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "okokokok";
      const expected = true;
      expect(regexGroups(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "okok";
      const expected = false;
      expect(regexGroups(input)).to.deep.equalInAnyOrder(expected);
    });
  });
  describe("Alternative Matching", () => {
    it("Case 1", () => {
      const input = "Mrs.Bums";
      const expected = true;
      expect(alternativeMatching(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 2", () => {
      const input = "Mr.Face";
      const expected = true;
      expect(alternativeMatching(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 3", () => {
      const input = "Rvd.Green";
      const expected = false;
      expect(alternativeMatching(input)).to.deep.equalInAnyOrder(expected);
    });
    it("Case 4", () => {
      const input = "Mr.V.K. Doshi";
      const expected = false;
      expect(alternativeMatching(input)).to.deep.equalInAnyOrder(expected);
    });
  });
});
