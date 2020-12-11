/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
const splitText = (text, len) => {
    if ( typeof text !== 'string' ) {
        return null;
    }

  const strArr = [];
  let startPosition = 0;
  len = len || 10;

  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join("\n");
};
console.log(splitText('abcd efg', 4));

// 1. 'abcdefg', 4 => ['abcd', 'efg'] => ['Abcd', 'Efg']
// => 'Abcd/nEfg'
