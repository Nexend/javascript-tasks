const user = {
  name: 'Tom',
  age: 20,
  city: 'Odessa',
}

const getKeys = obj => Object.keys(obj).forEach(elem => console.log(elem));

console.log(getKeys(user));

