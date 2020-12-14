/* eslint-disable no-restricted-syntax */

export default (obj) => {
  const newObj = {};

  for (const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
