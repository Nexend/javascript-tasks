function increaseEvenEl(arr, delta) {
  if ( !Array.isArray(arr) ) {
    return null;
  }
  return arr.map( elem => (elem % 2 === 0 ? elem + delta : elem) );
}
console.log(increaseEvenEl([1, 9, 2, 6, 10, 3], 10));
