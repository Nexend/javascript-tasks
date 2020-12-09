function cloneArr(arr) {
  if ( !Array.isArray(arr) ) {
    return null;
  }
  const newArr = arr.slice();

  return newArr;
}
console.log(cloneArr([1, 9, 2, 6, 10, 3]));
