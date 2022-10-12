const { solution } = require("../luckBalance");

describe("Test luckBalance.js", () => {
  test("Work out the maximum luck balance", () => {
    expect(
      solution(3, [
        [5, 1],
        [2, 1],
        [1, 1],
        [8, 1],
        [10, 0],
        [5, 0],
      ])
    ).toBe(29);

    expect(
      solution(5, [
        [13, 1],
        [10, 1],
        [9, 1],
        [8, 1],
        [13, 1],
        [12, 1],
        [18, 1],
        [13, 1],
      ])
    ).toBe(42);

    expect(
      solution(2, [
        [5, 1],
        [4, 0],
        [6, 1],
        [2, 1],
        [8, 0],
      ])
    ).toBe(21);
  });
});
