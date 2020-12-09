/* eslint-disable no-restricted-syntax */

// function getAdults(obj) {
//   const newObj = Object.assign(
//     {},
//     ...Object.entries(obj)
//     .filter(key => key[1] >= 18)
//   );

//   return newObj;
// }

function getAdults(obj) {
  const newObj = {};

  for ( const key in obj ) {
    if ( obj[key] >= 18 ) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

console.log( getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }) );

