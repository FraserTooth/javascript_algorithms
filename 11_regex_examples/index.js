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

module.exports = { anythingButANewLine, matchDate };
