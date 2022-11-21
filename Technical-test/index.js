var longestCommonPrefix = function (str) {
  let prefix = "";

  str.sort();

  for (let i = 0; i < str[0].length; i++) {
    if (str[0][i] === str[str.length - 1][i]) {
      prefix = str[0].substring(0, i + 1);
    } else {
      break;
    }
  }

  if (prefix.length == 0) {
    console.log("here is no common prefix among the input strings.");
  }

  return prefix;
};

let str = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(str));
