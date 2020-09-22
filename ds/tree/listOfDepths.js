/**
 * Given a binary tree, create an array of all the nodes at each level.
 * If you have a tree with N levels, you'll have N arrays.
 * --- Example
 * Given:
 *     0
 *   /   \
 *  1     3
 * / \   /
 *4  6  5
 * Answer: [[Node(0)], [Node(1), Node(3)], [Node(4), Node(6), Node(5)]]
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Create a list for nodes on each level
 * @param {Node} root
 * @returns {array} lists
 */
const createLevelList = (root) => {
  const lists = [];
  createLevelListHelper(root, lists, 0);
  return lists;
};

/**
 * Helper function as above.
 * @param {Node} root
 * @param {array} lists
 * @param {number} level
 */
const createLevelListHelper = (root, lists, level) => {
  if (root == null) return;

  let list;
  if (lists.length == level) {
    list = [];
    lists.push(list);
  } else {
    list = lists[level];
  }
  list.push(root);
  createLevelListHelper(root.left, lists, level + 1);
  createLevelListHelper(root.right, lists, level + 1);
};

/** An alternative solution to the problem */
const createLevelListAlt = (root) => {
  const lists = [];
  let current = [];
  if (root) {
    current.push(root);
  }
  while (current.length) {
    lists.push(current);
    const parents = current; // Remember the current level
    current = []; // Move to next level
    for (let parent of parents) {
      if (parent.left) {
        current.push(parent.left);
      }
      if (parent.right) {
        current.push(parent.right);
      }
    }
  }
  return lists;
};

module.exports = { Node, createLevelList, createLevelListAlt };
