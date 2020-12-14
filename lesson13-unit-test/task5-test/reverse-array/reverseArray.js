export const reverseArray = arr => {
  if ( !Array.isArray(arr) ) {
    return null;
  }
  return arr.slice().reverse();
}
console.log(reverseArray([1, 9, 2, 6, 10, 3]));
