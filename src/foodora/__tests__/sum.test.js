import sum from "../sum";

test("Sum function should caculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);

  // const result1 = sum(3, 2);
  // expect(result1).toBe(7);
});