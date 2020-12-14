import getMinSquaredNum from "./getMinSquaredNumber";

it("should get Infinity", () => {
  const result = getMinSquaredNum([]);

  expect(result).toEqual(Infinity);
});

it("should get null", () => {
  const result = getMinSquaredNum("");

  expect(result).toEqual(null);
});

it("should get the square of the minimum number", () => {
  const result = getMinSquaredNum([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
