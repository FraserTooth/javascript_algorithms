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
  const Regex_Pattern = /\S\S\s\S\S\s\S\S/g;

  const matches = Test_String.match(Regex_Pattern);
  const match = matches != null && matches.length > 0;
  return match;
};

const wordAndNon = Test_String => {
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

module.exports = {
  anythingButANewLine,
  matchDate,
  setOfInitials,
  wordAndNon,
  stringOfLength,
  subsetChars
};
