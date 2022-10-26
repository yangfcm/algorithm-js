const { swapNodes } = require("../../tree/swapNodes");

const indexes1 = [
  [2, 3],
  [-1, -1],
  [-1, -1],
];
const queries1 = [1, 1];
const expected1 = [
  [3, 1, 2],
  [2, 1, 3],
];

const indexes2 = [
  [2, 3],
  [4, -1],
  [5, -1],
  [6, -1],
  [7, 8],
  [-1, 9],
  [-1, -1],
  [10, 11],
  [-1, -1],
  [-1, -1],
  [-1, -1],
];
const queries2 = [2, 4];
const expected2 = [
  [2, 9, 6, 4, 1, 3, 7, 5, 11, 8, 10],
  [2, 6, 9, 4, 1, 3, 7, 5, 10, 8, 11],
];

const indexes3 = [
  [2, 3],
  [4, 5],
  [6, -1],
  [-1, 7],
  [8, 9],
  [10, 11],
  [12, 13],
  [-1, 14],
  [-1, -1],
  [15, -1],
  [16, 17],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
];
const queries3 = [2, 3];
const expected3 = [
  [14, 8, 5, 9, 2, 4, 13, 7, 12, 1, 3, 10, 15, 6, 17, 11, 16],
  [9, 5, 14, 8, 2, 13, 7, 12, 4, 1, 3, 17, 11, 16, 6, 10, 15],
];

describe("Test,swapNodes.js", () => {
  test("Test swapNodes", () => {
    expect(swapNodes(indexes1, queries1)).toEqual(expected1);
    expect(swapNodes(indexes2, queries2)).toEqual(expected2);
    expect(swapNodes(indexes3, queries3)).toEqual(expected3);
  });
});
