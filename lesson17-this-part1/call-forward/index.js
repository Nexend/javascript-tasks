/* eslint-disable prefer-rest-params */

// defer(func, ms) => Function

// function defer(func, ms) {
//   return function() {
//     setTimeout(() => func(...arguments), ms);
//   }
// }

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const deferredSum = defer(sum, 1000);

// deferredSum(5, 6);

function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

const user = {
  name: "Tom",
  sayHi() {
    console.log(`Hi, I'm ${this.name}!`);
  },
};

const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: "Bob" });
