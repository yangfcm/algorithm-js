const BinarySearchTree = require("../../tree/bst");

describe("Test bst.js", () => {
  let testTree;

  beforeEach(() => {
    /**
     * The tree has the shape like this:
     *
     *          10
     *          /\
     *         5 15
     *        /   \
     *       0     20
     *      / \
     *     -5  3
     */
    testTree = new BinarySearchTree();
    testTree.insert(10);
    testTree.insert(5);
    testTree.insert(15);
    testTree.insert(20);
    testTree.insert(0);
    testTree.insert(-5);
    testTree.insert(3);
  });

  test("Node is a constructor", () => {
    expect(typeof BinarySearchTree.prototype.constructor).toEqual("function");
  });

  test("Node can insert correctly", () => {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(17);

    expect(tree.root.left.data).toEqual(5);
    expect(tree.root.right.data).toEqual(15);
    expect(tree.root.right.right.data).toEqual(17);
  });

  test("Contain returns node with the same data", () => {
    expect(testTree.contain(3)).toBe(true);
  });

  test("Contain returns null if value not found", () => {
    expect(testTree.contain(9999)).toBe(false);
  });

  test("Can find min data in tree", () => {
    expect(testTree.findMin()).toBe(-5);
  });

  test("Can find max data in tree", () => {
    expect(testTree.findMax()).toBe(20);
  });

  test("Should get the min and max height of the tree", () => {
    expect(testTree.findMinHeight()).toBe(1);
    expect(testTree.findMaxHeight()).toBe(3);
    expect(testTree.isBalanced()).toBe(false);

    // Add two more nodes to change the min height of tree.
    testTree.insert(12);
    testTree.insert(8);
    expect(testTree.findMinHeight()).toBe(2);
    expect(testTree.findMaxHeight()).toBe(3);

    // Add more nodes to make the tree balanced.
    testTree.insert(6);
    testTree.insert(9);
    testTree.insert(11);
    testTree.insert(13);
    testTree.insert(16);
    testTree.insert(24);
    expect(testTree.findMinHeight()).toBe(3);
    expect(testTree.isBalanced()).toBe(true);
  });

  test("Test findMinHeight and findMaxHeight with empty tree", () => {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.findMinHeight()).toBe(-1);
    expect(emptyTree.findMaxHeight()).toBe(-1);
    expect(emptyTree.isBalanced()).toBe(true);
  });
});
