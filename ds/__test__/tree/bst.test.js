const Node = require("../../tree/bst");

describe("Test bst.js", () => {
  let testTree;

  beforeEach(() => {
    testTree = new Node(10);
    testTree.insert(5);
    testTree.insert(15);
    testTree.insert(20);
    testTree.insert(0);
    testTree.insert(-5);
    testTree.insert(3);
  });

  test("Node is a constructor", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });

  test("Node can insert correctly", () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(17);

    expect(node.left.data).toEqual(5);
    expect(node.right.data).toEqual(15);
    expect(node.right.right.data).toEqual(17);
  });

  test("Contain returns node with the same data", () => {
    const three = testTree.left.left.right;
    expect(testTree.contain(3)).toEqual(three);
  });

  test("Contain returns null if value not found", () => {
    expect(testTree.contain(9999)).toEqual(null);
  });
});
