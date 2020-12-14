import { reverseArray } from "./reverseArray";

it("should get reversed array", () => {
  const result = reverseArray([1, 2, 3]);

  expect(result).toEqual([3, 2, 1]);
});

it("should get null if argument not array", () => {
  const result = reverseArray(2);

  expect(result).toEqual(null);
});

it("shouldn't get didn't reverse array", () => {
  const result = reverseArray([1, 4, 6]);

  expect(result).not.toEqual(1, 4, 6);
});
