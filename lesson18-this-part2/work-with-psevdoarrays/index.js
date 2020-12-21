// function sumOfSquares() {
//     return [].reduce.apply(arguments, [(acc, elem) => {
//         return acc + elem;
//     }, 0]);
// }

const sumOfSquares = (...args) =>
  [...args].reduce((acc, elem) => acc + (elem * elem), 0);

console.log(sumOfSquares(3, 2, 1)); // 14
