const isPrime = require("../isprime");

describe("Test isprime.js", () => {
  test("should function is defined", () => {
    expect(isPrime).toBeDefined();
  });

  test("0 is not a prime", () => {
    expect(isPrime(0)).toBeFalsy;
  });

  test("1 is not a prime", () => {
    expect(isPrime(1)).toBeFalsy;
  });

  test("2 is not a prime", () => {
    expect(isPrime(2)).toBeFalsy;
  });

  test("3 is a prime", () => {
    expect(isPrime(3)).toBeTruthy;
  });

  test("17 is a prime", () => {
    expect(isPrime(17)).toBeTruthy;
  });

  test("10000 is not a prime", () => {
    expect(isPrime(10000)).toBeFalsy;
  });
});
