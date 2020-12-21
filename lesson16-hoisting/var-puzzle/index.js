/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable import/no-mutable-exports */

let foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }

  return foo;
}
 foo = bar();
 export default foo;

console.log(bar());
console.log(foo);
