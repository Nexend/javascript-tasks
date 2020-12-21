/* eslint-disable no-return-assign */
let acc = 0;

export const add = num => acc += num;

export const decrease = num => acc -= num;

export const reset = () => acc = 0;

export const getMemo = () => acc;


console.log(add(10));
console.log(decrease(26));
console.log(reset());
console.log(getMemo());

