export default (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const minEl = Math.min(...arr.map((el) => Math.abs(el)));
  return minEl * minEl;
};