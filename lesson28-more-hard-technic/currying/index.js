const sum = (a, b) => a + b;

const mult = a => b => a * b;

const twice = mult(2);

const triple = mult(3);

const result = twice(7);

console.log(result);
console.log(triple(9));
