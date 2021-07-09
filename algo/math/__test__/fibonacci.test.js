const { solution1, solution2, solution3, solution4 } = require("../fibonacci");

describe("Test fibonacci.js", () => {
  test("solution functions are defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
    expect(solution3).toBeDefined();
    expect(solution4).toBeDefined();
  });

  test("solution1 can calculate fibonacci correctly", () => {
    // Recursive, don't test big numbers.
    expect(solution1(1)).toEqual(1);
    expect(solution1(2)).toEqual(1);
    expect(solution1(3)).toEqual(2);
    expect(solution1(4)).toEqual(3);
    expect(solution1(5)).toEqual(5);
    expect(solution1(6)).toEqual(8);
  });

  test("solution2 can calculate fibonacci correctly", () => {
    expect(solution2(1)).toEqual(1);
    expect(solution2(2)).toEqual(1);
    expect(solution2(3)).toEqual(2);
    expect(solution2(4)).toEqual(3);
    expect(solution2(5)).toEqual(5);
    expect(solution2(6)).toEqual(8);
    expect(solution2(39)).toEqual(63245986);
  });

  test("solution3 can calculate fibonacci correctly", () => {
    expect(solution3(1)).toEqual(1);
    expect(solution3(2)).toEqual(1);
    expect(solution3(3)).toEqual(2);
    expect(solution3(4)).toEqual(3);
    expect(solution3(5)).toEqual(5);
    expect(solution3(6)).toEqual(8);
    expect(solution3(39)).toEqual(63245986);
  });

  test("solution4 can calculate fibonacci correctly", () => {
    expect(solution4(1)).toEqual(1);
    expect(solution4(2)).toEqual(1);
    expect(solution4(3)).toEqual(2);
    expect(solution4(4)).toEqual(3);
    expect(solution4(5)).toEqual(5);
    expect(solution4(6)).toEqual(8);
    expect(solution4(39)).toEqual(63245986);
  });
});
