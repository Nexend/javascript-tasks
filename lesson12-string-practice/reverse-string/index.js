const reverseString = str => typeof str === "string" ? str.split('').reverse().join('') : null;
console.log(reverseString('hello'));