// algo
// 1. В функции saveCalls Создадим функцию withMemory которая принимает все параметры входящей функции
// 2. В функции withMemory добовляем аргументы в свойсвто calls.
    // 2.1 Возвращаем входящую функцию с помощью метода apply(), с укзанным значением this и аргументами
// 3. В теле функции saveCalls , берем функцию withMemory и присваевам ей свойство calls как массив, куда будут вносится все аргументы 
// 4. возвращаем функцию withMemory

// input: function
// output: function
function saveCalls(func) {
  // input: arguments
  // output: array(of arguments)
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.apply(this, [args]);
  }
  withMemory.calls = [];
  return withMemory;
}

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

console.log(testWithMemory.calls); // [ [4, 2], [9, 1] ]

/* Поддержка функций с контекстом */

const user = {
  name: "John",
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

methodWithMemory.apply({ name: "Tom" }); // 'Tom'


console.log(methodWithMemory.calls); // [ [] ]
