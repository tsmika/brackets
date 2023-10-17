module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  const pairsBrackets = {};

  for (item of bracketsConfig) {
    openBrackets.push(item[0]);
    closeBrackets.push(item[1]);
    pairsBrackets[item[0]] = item[1];
  }

  let resString = removeCorrectPairs(str, pairsBrackets);
  return (resString.length === 0);
}

function removeCorrectPairs(string, pairsBrackets) {
  for (let i = 0; i < string.length - 1; i++) {
    if (isCorrectPair(`${string[i]}${string[i + 1]}`, pairsBrackets)) {
      string = string.slice(0, i) + string.slice(i + 2, string.length);
      return removeCorrectPairs(string, pairsBrackets);
    }
  }
  return string;
}

function isCorrectPair(pair, pairsBrackets) {
  return Object.entries(pairsBrackets).some(([key, value]) => key === pair[0] && value === pair[1]);
}