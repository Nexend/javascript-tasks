/* eslint-disable radix */

const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));

const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));

const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));

const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));


console.log(getParsedIntegers([2,2.5,'10',NaN,undefined,3.88,'10.2','10sf','ten']));
console.log(getParsedIntegersV2([2,2.5,'10',NaN,undefined,3.88,'10.2','10sf','ten']));
console.log(getParsedFloats([2,2.5,'10',NaN,undefined,3.88,'10.2','10sf','ten']));
console.log(getParsedFloatsV2([2,2.5,'10',NaN,undefined,3.88,'10.2','10sf','ten']));








