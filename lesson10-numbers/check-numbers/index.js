/* eslint-disable no-restricted-globals */

const getFiniteNumbers = arr => arr.filter(item => Number.isFinite(item));

const getFiniteNumbersV2 = arr => arr.filter(item => isFinite(item));

const getNaN = arr => arr.filter(item => Number.isNaN(item));

const getNaNV2 = arr => arr.filter(item => isNaN(item));

const getIntegers = arr => arr.filter(item => Number.isInteger(item));

console.log(getFiniteNumbers(["21", 1, NaN, 10, 3]));
console.log(getFiniteNumbersV2(["21", 1, NaN, 10, 3]));
console.log(getNaN(["21", 1, NaN, 10, 3, NaN, 5, NaN, 'ew']));
console.log(getNaNV2(["21", 1, NaN, 10, 3, NaN, 5, NaN, 'ew']));
console.log(getIntegers(["21", 1, NaN, 10, 3, NaN, 5, NaN, 13.5]));






