const { flatten1, flatten2, flatten3 } = require("../flatten");

describe("Test flatten.js", () => {
  const empty1 = [];
  const empty2 = [[], [[]], [[], [[[]]]]];
  const single1 = [1];
  const single2 = [[[[[1]]]]];
  const mul1 = [1, 2, 3, 4];
  const mul2 = [1, [2, [3, 4], [5, 6, 7]]];
  const mul3 = [
    [1, 2, 3],
    [[4, 5], 6, [7, 8]],
    [9, [10, [11, [12, 13]]]],
  ];

  test("Empty array", () => {
    expect(flatten1(empty1)).toEqual([]);
    expect(flatten1(empty2)).toEqual([]);

    expect(flatten2(empty1)).toEqual([]);
    expect(flatten2(empty2)).toEqual([]);

    flatten3(empty1);
    expect(empty1).toEqual([]);
    flatten3(empty2);
    expect(empty2).toEqual([]);
  });

  test("Single element array", () => {
    expect(flatten1(single1)).toEqual([1]);
    expect(flatten1(single2)).toEqual([1]);

    expect(flatten2(single1)).toEqual([1]);
    expect(flatten2(single2)).toEqual([1]);

    flatten3(single1);
    expect(single1).toEqual([1]);
    flatten3(single2);
    expect(single2).toEqual([1]);
  });

  test("Multiple element array", () => {
    expect(flatten1(mul1)).toEqual([1, 2, 3, 4]);
    expect(flatten1(mul2)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(flatten1(mul3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

    expect(flatten2(mul1)).toEqual([1, 2, 3, 4]);
    expect(flatten2(mul2)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(flatten2(mul3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

    flatten3(mul1);
    expect(mul1).toEqual([1, 2, 3, 4]);
    flatten3(mul2);
    expect(mul2).toEqual([1, 2, 3, 4, 5, 6, 7]);
    flatten3(mul3);
    expect(mul3).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });
});
