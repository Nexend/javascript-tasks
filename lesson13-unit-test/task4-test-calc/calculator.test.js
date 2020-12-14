import { calc } from "./calculator";

it("should get sum numbers", () => {
  const result = calc("4 + 2");

  expect(result).toEqual("4 + 2 = 6");
});

it("should get difference numbers", () => {
  const result = calc("4 - 2");

  expect(result).toEqual("4 - 2 = 2");
});

it("should get multiplied numbers", () => {
  const result = calc("4 * 2");

  expect(result).toEqual("4 * 2 = 8");
});

it("should get division numbers", () => {
  const result = calc("4 / 2");

  expect(result).toEqual("4 / 2 = 2");
});

it("should get null", () => {
  const result = calc(10);

  expect(result).toEqual(null);
});
