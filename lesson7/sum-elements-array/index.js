function sum(arr) {
  if ( !Array.isArray(arr) ) {
    return null;
  }
  return arr.reduce((acc, item) => acc + item)  
}
console.log(sum([1, 9, 2, 6, 10, 3]));
