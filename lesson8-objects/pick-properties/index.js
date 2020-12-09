/* eslint-disable no-restricted-syntax */

// function pickProps(obj, arr) {
//   const newObj = Object.assign(
//     {},
//     ...Object.entries(obj).map(
//       ([key, prop]) => arr.includes(key) && { [key]: prop }
//     )
//   );

//   return newObj;
// }

function pickProps(obj, arr) {
  const newObj = {};
  for (const key in obj) {
    if (arr.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log( pickProps({ a: "a", 17.1: 17.1, "John Doe": "John Doe" }, ["a",17.1,"John Doe"]) );

