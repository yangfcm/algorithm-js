const createMinimalBST = require("../../tree/minimalTree");

describe("Test createMinimalBST", () => {
  test("function is defined", () => {
    expect(createMinimalBST).toBeDefined();
  });

  test("create minimal BST for array [1]", () => {
    const node = createMinimalBST([1]);
    expect(node.data).toBe(1);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });

  test("create minimal BST for array [1,2]", () => {
    const node = createMinimalBST([1, 2]);
    expect(node.data).toBe(1);
    expect(node.left).toBe(null);
    expect(node.right.data).toBe(2);
  });

  test("create minimal BST for array [1,2,3]", () => {
    const node = createMinimalBST([1, 2, 3]);
    expect(node.data).toBe(2);
    expect(node.left.data).toBe(1);
    expect(node.right.data).toBe(3);
  });

  test("create minimal BST for array [1,2,3,4]", () => {
    const node = createMinimalBST([1, 2, 3, 4]);
    expect(node.data).toBe(2);
    expect(node.left.data).toBe(1);
    expect(node.right.data).toBe(3);
    expect(node.right.right.data).toBe(4);
  });

  test("create minimal BST for array [1,2,3,4,5]", () => {
    const node = createMinimalBST([1, 2, 3, 4, 5]);
    expect(node.data).toBe(3);
    expect(node.left.data).toBe(1);
    expect(node.right.data).toBe(4);
    expect(node.left.right.data).toBe(2);
    expect(node.right.right.data).toBe(5);
  });

  test("create minimal BST for array [1,2,3,4,5,6,7]", () => {
    const node = createMinimalBST([1, 2, 3, 4, 5, 6, 7]);
    expect(node.data).toBe(4);
    expect(node.left.data).toBe(2);
    expect(node.right.data).toBe(6);
    expect(node.left.left.data).toBe(1);
    expect(node.left.right.data).toBe(3);
    expect(node.right.left.data).toBe(5);
    expect(node.right.right.data).toBe(7);
  });
});
