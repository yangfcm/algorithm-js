const {
  inOrderTraverse,
  preOrderTraverse,
  postOrderTraverse,
} = require("../../tree/bTreeTraverse");
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

  test("Should be able to remove leaf node from bst", () => {
    const removedNode = testTree.remove(3);
    expect(removedNode.data).toBe(3);
    expect(testTree.root.left.left.data).toBe(0); // The parent node of node(3), which is node(0).
    expect(testTree.root.left.left.left.data).toBe(-5); // Its left child is still there.
    expect(testTree.root.left.left.right).toBe(null); // Its right child is removed.
  });

  test("Should return null when attempting to remove a non-existent ndoe", () => {
    const removedNode = testTree.remove(99);
    expect(removedNode).toBe(null);
  });

  test("Should return null when attempting to remove a node from an empty tree", () => {
    const emptyTree = new BinarySearchTree();
    const removed = emptyTree.remove(5);
    expect(removed).toBe(null);
  });

  test("Should remove the root node if the tree has only one node", () => {
    const oneNodeTree = new BinarySearchTree();
    oneNodeTree.insert(5);
    const removed = oneNodeTree.remove(5);
    expect(removed.data).toBe(5);
    expect(oneNodeTree.root).toBe(null);
  });

  test("Should be able to remove a node with one child from bst - 1", () => {
    const removedNode = testTree.remove(15);
    expect(removedNode.data).toBe(15);
    expect(testTree.root.right.data).toBe(20);
    expect(testTree.root.right.left).toBe(null);
  });

  test("Should be able to remove a node with one child from bst - 2", () => {
    const removedNode = testTree.remove(5);
    expect(removedNode.data).toBe(5);
    expect(testTree.root.left.data).toBe(0);
  });

  test("Should remove the root node from two-node bst", () => {
    const twoNodeTree = new BinarySearchTree();
    twoNodeTree.insert(5);
    twoNodeTree.insert(7);
    const removed = twoNodeTree.remove(5);
    expect(removed.data).toBe(5);
    expect(twoNodeTree.root.data).toBe(7);
    expect(twoNodeTree.root.left).toBe(null);
    expect(twoNodeTree.root.right).toBe(null);
  });

  test("Should remove the node with two children from bst - 1", () => {
    /**
     * Before remove:
     *          10
     *          /\
     *         5 15
     *        /   \
     *       0     20
     *      / \
     *     -5  3
     * After remove node 0:
     *          10
     *          /\
     *         5 15
     *        /   \
     *       3     20
     *      /
     *     -5
     *
     */
    const removedNode = testTree.remove(0);
    expect(removedNode.data).toBe(0);
    expect(testTree.root.left.data).toBe(5);
    expect(testTree.root.left.left.data).toBe(3);
    expect(testTree.root.left.right).toBe(null);
    expect(testTree.root.left.left.left.data).toBe(-5);
    expect(testTree.root.left.left.right).toBe(null);
  });

  test("Should remove the node with two children from bst - 2 (remove root node)", () => {
    /**
     * Before remove:
     *          10
     *          /\
     *         5 15
     *        /   \
     *       0     20
     *      / \
     *     -5  3
     * After remove node 10:
     *
     *          15
     *          /\
     *         5 20
     *        /
     *       0
     *      / \
     *     -5 3
     *
     */
    const removedNode = testTree.remove(10);
    expect(removedNode.data).toBe(10);
    expect(testTree.root.data).toBe(15);
    expect(testTree.root.left.data).toBe(5);
    expect(testTree.root.right.data).toBe(20);
    expect(testTree.root.right.left).toBe(null);
    expect(testTree.root.right.right).toBe(null);
    expect(testTree.root.left.left.data).toBe(0);
    expect(testTree.root.left.right).toBe(null);
    expect(testTree.root.left.left.left.data).toBe(-5);
    expect(testTree.root.left.left.right.data).toBe(3);
  });

  test("Should be able to invert a bst", () => {
    /* After invert, the tree would be like:
    *          10
    *          /\
    *         15 5
    *          \ /\
    *          0 20
    *          /\
    *         3  -5
    */
    testTree.invert();
    expect(testTree.root.data).toBe(10);
    expect(testTree.root.left.data).toBe(15);
    expect(testTree.root.right.data).toBe(5);
    expect(testTree.root.left.left.data).toBe(20);
    expect(testTree.root.left.right).toBe(null);
    expect(testTree.root.right.left).toBe(null);
    expect(testTree.root.right.right.data).toBe(0);
    expect(testTree.root.right.right.left.data).toBe(3);
    expect(testTree.root.right.right.right.data).toBe(-5);
  });

  test("The order of inorder traverse should be reversed with inverting bst", () => {
    const order = inOrderTraverse(testTree.root);
    expect(order).toEqual([-5, 0, 3, 5, 10, 15, 20]);
    
    testTree.invert();
    const orderAfterInvert = inOrderTraverse(testTree.root);
    expect(orderAfterInvert).toEqual([20, 15, 10, 5, 3, 0, -5]);
  })
});
