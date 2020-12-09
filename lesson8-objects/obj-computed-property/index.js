const transaction = {
  value: 170
}


function addPropertyV1(obj,key,value) {
  // eslint-disable-next-line no-param-reassign
  obj[key] = value;
  return obj
}
function addPropertyV2(obj,key,value) {
  // eslint-disable-next-line no-param-reassign
  Object.assign(obj[key] = value);
  return obj;
}
function addPropertyV3(obj,key,value) {
  const objClone = {...obj};
  objClone[key] = value;
  return objClone;
}
function addPropertyV4(obj,key,value) {
  const objClone = { ...obj };
  objClone[key] = value;
  return objClone;
}
console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(addPropertyV2(transaction, 'city', 'Kiev'));
console.log(addPropertyV3(transaction, 'age', '10'));
console.log(addPropertyV4(transaction, 'name', 'Bob'));


