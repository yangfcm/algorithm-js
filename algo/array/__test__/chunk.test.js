const { solution1, solution2 } = require("../chunk");

describe("Test chunk.js", () => {
  test("solution functions defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test("chunk divides an array of 10 elements with chunk size 2", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ];
    const size = 2;

    const chunked1 = solution1(arr, size);
    expect(chunked1).toEqual(expected);

    const chunked2 = solution2(arr, size);
    expect(chunked2).toEqual(expected);
  });

  test("chunk divides an array of 3 elements with chunk size 1", () => {
    const arr = [1, 2, 3];
    const expected = [[1], [2], [3]];
    const size = 1;

    const chunked1 = solution1(arr, size);
    expect(chunked1).toEqual(expected);

    const chunked2 = solution2(arr, size);
    expect(chunked2).toEqual(expected);
  });

  test("chunk divides an array of 5 elements with chunk size 3", () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [
      [1, 2, 3],
      [4, 5],
    ];
    const size = 3;

    const chunked1 = solution1(arr, size);
    expect(chunked1).toEqual(expected);

    const chunked2 = solution2(arr, size);
    expect(chunked2).toEqual(expected);
  });

  test("chunk divides an array of 13 elements with chunk size 5", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const expected = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13],
    ];
    const size = 5;

    const chunked1 = solution1(arr, size);
    expect(chunked1).toEqual(expected);

    const chunked2 = solution2(arr, size);
    expect(chunked2).toEqual(expected);
  });
});
