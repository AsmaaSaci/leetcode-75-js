var letterCombinations = function(digits) {
  if (!digits.length) return [];
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };
  const res = [];
  function backtrack(i, path) {
    if (i === digits.length) {
      res.push(path);
      return;
    }
    for (let ch of map[digits[i]]) {
      backtrack(i+1, path+ch);
    }
  }
  backtrack(0, "");
  return res;
};
