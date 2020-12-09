function squareArray(arr) {
  if ( !Array.isArray(arr) ) {
    return null;
  }
  return arr.map( elem => elem * elem );
}
console.log(squareArray([1, 9, 2, 6, 10, 3]));
