function createArrayOfFunctions (length) {
  if ( length === undefined ) {
    return Array(0);
  }
  if ( typeof length !== 'number' ) {
    return null;
  }
  
  return Array(length).fill().map((el,index) => 
    function() {
      return index
    }
  );
}
console.log(createArrayOfFunctions(9)[5]());