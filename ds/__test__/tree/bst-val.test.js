const bstVal = require("../../tree/bst-val");
const BinarySearchTree = require("../../tree/bst");
const { Node } = require("../../tree/bst");

describe("Test bstVal.js", () => {
  test("Validate recognizes a valid BST", () => {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(0);
    tree.insert(20);

    expect(bstVal(tree)).toEqual(true);
  });

  test("Validate recognizes an invalid BST", () => {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(0);
    tree.insert(20);
    tree.root.left.left.right = new Node(99999);

    expect(bstVal(tree)).toEqual(false);
  });

  test("Empty tree is considered to be a valid BST", () => {
    const tree = new BinarySearchTree();

    expect(bstVal(tree)).toBe(true);
  });
});
