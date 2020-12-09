const flatArray = arr => arr.reduce((acc, elem) => acc.concat(elem), []);

console.log(flatArray([1,[2,3,4],5,[6]]));