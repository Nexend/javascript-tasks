import getAdults from "./filteringObject";

it("should get empty object", () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

it("should get object where the age of person is more or equal 18", () => {
  const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });

  expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
});

it("shouldn't get object where the age of person only over 18", () => {
  const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });

  expect(result).not.toEqual({ 'John Doe': 19});
});


