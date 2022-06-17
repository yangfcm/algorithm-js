/**
 * @name minimalTree
 * @description Given a sorted, increasing order array with unique integer elements,
 * write a function to create a binary search tree with minimal height.
 * Note: A minimal bst has about the same number of nodes on the left of each node as on the right.
 * @example [1,2,3,4,5,6, 7] =>
 *      4
 *    /   \
 *   2     6
 *  / \   / \
 * 1  3  5  7
 *
 * @solution The middle of each subsection of the array becomes the root of the node.
 * The left half of the array will become the left subtree
 * and the right half of the array will become the right subtree.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const createMinimalBST = (arr) => {
  return createMinimalBSTHelper(arr, 0, arr.length - 1);
};

const createMinimalBSTHelper = (arr, start, end) => {
  if (end < start) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const n = new Node(arr[mid]);
  n.left = createMinimalBSTHelper(arr, start, mid - 1);
  n.right = createMinimalBSTHelper(arr, mid + 1, end);
  return n;
};

module.exports = createMinimalBST;
