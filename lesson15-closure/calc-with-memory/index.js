/* eslint-disable no-return-assign */
export const createCalculator = () => {
  let memory = 0;
  function add(num) {
    return (memory += num);
  }
  function decrease(num) {
    return (memory -= num);
  }
  function reset() {
    return (memory = 0);
  }
  function getMemo() {
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
const mem1 = createCalculator();
const mem2 = createCalculator();
const mem3 = createCalculator();
const mem4 = createCalculator();

console.log(mem1.add(12));
console.log(mem2.decrease(12));
console.log(mem3.reset());
console.log(mem4.getMemo());
