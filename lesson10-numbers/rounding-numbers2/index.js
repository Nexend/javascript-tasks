const superRound = (num, numOfSigns) => [
  Math.floor(num * 10 ** numOfSigns) / 10 ** numOfSigns,
  Math.round(num * 10 ** numOfSigns) / 10 ** numOfSigns,
  Math.ceil(num * 10 ** numOfSigns) / 10 ** numOfSigns,
  Math.trunc(num * 10 ** numOfSigns) / 10 ** numOfSigns,
  +num.toFixed(numOfSigns),
];
console.log(superRound(Math.PI, 6));
