// Some Regex Examples

const anythingButANewLine = Test_String => {
  const Regex_Pattern = /^...\....\....\....$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const matchDate = Test_String => {
  const Regex_Pattern = /\d\d\D\d\d\D\d\d\d\d/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const setOfInitials = Test_String => {
  //Matching Whitespace or non whitespace
  const Regex_Pattern = /\S\S\s\S\S\s\S\S/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const wordAndNon = Test_String => {
  //w matches word characters (a, A, 1 and _)
  //W is everything else
  const Regex_Pattern = /\w\w\w\W\w\w\w\w\w\w\w\w\w\w\W\w\w\w/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const stringOfLength = Test_String => {
  const Regex_Pattern = /^\d\w\w\w\w\.$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const subsetChars = Test_String => {
  const Regex_Pattern = /^[123][120][xs0][30Aa][xsu][.,]$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const antiSubsetChars = Test_String => {
  const Regex_Pattern = /^[^0123456789][^aeiou][^bcDf][^\r\n\t\f ][^AEIOU][^\.\,]$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const charRange = Test_String => {
  const Regex_Pattern = /^[a-z][1-9][^a-z][^A-Z][A-Z]/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const matchRepititions = Test_String => {
  const Regex_Pattern = /^[a-zA-Z02468]{40}[13579\s]{5}$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const matchVariableRepititions = Test_String => {
  const Regex_Pattern = /^\d{1,2}[a-zA-Z]{3,}\.{0,3}$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const matchZeroOrMoreRepititions = Test_String => {
  const Regex_Pattern = /^\d{2,}[a-z]*[A-Z]*$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};
const matchOneOrMoreRepititions = Test_String => {
  const Regex_Pattern = /^\d+[A-Z]+[a-z]+$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};
const regexGroups = Test_String => {
  //Groups the characters inside the parentesis into a contiguous stream
  const Regex_Pattern = /(ok){3,}/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};
const alternativeMatching = Test_String => {
  const Regex_Pattern = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

module.exports = {
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
};
