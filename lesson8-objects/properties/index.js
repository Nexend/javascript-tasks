/* eslint-disable guard-for-in */
const user = {
  name: "John Doe",
  age: 17,
  interest: "football",
};

const concatProps = obj => {
  let arr = [];

  // eslint-disable-next-line guard-for-in
  // eslint-disable-next-line prefer-const
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    arr = arr.concat(obj[key]);
  }

  return arr;
};
console.log(concatProps(user));
