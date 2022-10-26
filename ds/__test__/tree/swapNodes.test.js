const { buildTree } = require("../../tree/swapNodes");

describe("Test swapNodes.js", () => {
  test("Test buildTree function", () => {
    const indexes = [
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
    buildTree(indexes);
  });
});
