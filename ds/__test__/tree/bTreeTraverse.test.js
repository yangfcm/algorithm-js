const {
  preOrderTraverse,
  inOrderTraverse,
  postOrderTraverse,
} = require("../../tree/bTreeTraverse");
const Node = require("../../tree/bst");

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

const root2 = new Node(25); // root2 is a binary search tree.
root2.insert(15);
root2.insert(50);
root2.insert(10);
root2.insert(22);
root2.insert(35);
root2.insert(70);
root2.insert(4);
root2.insert(12);
root2.insert(18);
root2.insert(24);
root2.insert(31);
root2.insert(44);
root2.insert(66);
root2.insert(90);

describe("Test bTreeTraverse.js", () => {
  test("Test preorder traverse", () => {
    expect(preOrderTraverse(root1)).toEqual([1, 2, 4, 5, 3]);
    expect(preOrderTraverse(root2)).toEqual([
      25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90,
    ]);
  });

  test("Test inorder traverse", () => {
    expect(inOrderTraverse(root1)).toEqual([4, 2, 5, 1, 3]);
    expect(inOrderTraverse(root2)).toEqual([
      4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90,
    ]);
  });

  test("Test postorder traverse", () => {
    expect(postOrderTraverse(root1)).toEqual([4, 5, 2, 3, 1]);
    expect(postOrderTraverse(root2)).toEqual([
      4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25,
    ]);
  });
});
