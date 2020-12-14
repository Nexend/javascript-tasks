/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */

const splitString = (text, len) => {
  const strArr = [];
  let startPosition = 0;
  let dotsCount;

  if (!(typeof text === "string")) {
    return null;
  }
  if (len === undefined) {
    len = 10;
  }

  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0] + chunk.slice(1));
    startPosition += len;
    dotsCount = len - chunk.length;
  }

  strArr[strArr.length - 1] = strArr[strArr.length - 1].concat(".".repeat(dotsCount));;
  return strArr;

};
console.log(splitString("abcd efgh", 4));

// splitString('abcd efgh', 4) => ['abcd', ' efg', 'h...']
