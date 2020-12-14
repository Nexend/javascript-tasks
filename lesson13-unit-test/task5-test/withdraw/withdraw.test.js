import {withdraw} from "./withdraw";

it("should get customer balance if balance is greater than amount of money", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it("should get -1 if balance is less than amount of money", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

it("should't get the balance of all customers ", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).not.toEqual([1400, 37, -6]);
});
