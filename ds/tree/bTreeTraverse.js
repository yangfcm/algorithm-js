/**
 * @name bstTraverse
 * @description Implement three ways to traverse a binary tree: inorder, preorder and postorder
 * Binary (search) tree is implemented in 'bst.js'
 * @source https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 */

/**
 * @description Implement preorder traversal of a b-tree.
 * @param {Node} node A tree root node
 * @returns An array of node data that represents the preorder traversal of the tree.
 */
function preOrderTraverse(node) {
  const traverseArr = [];

  function doTraverse(node) {
    if (node === null) return;
    traverseArr.push(node.data);
    doTraverse(node.left);
    doTraverse(node.right);
  }

  doTraverse(node);

  return traverseArr;
}

/**
 * @description Implement inorder traversal of a b-tree.
 * @param {Node} node A tree root node
 * @returns An array of node data that represents the inorder traversal of the tree.
 */
function inOrderTraverse(node) {
  const traverseArr = [];

  function doTraverse(node) {
    if (node === null) return;
    doTraverse(node.left);
    traverseArr.push(node.data);
    doTraverse(node.right);
  }

  doTraverse(node);

  return traverseArr;
}

/**
 * @description Implement postorder traversal of a b-tree.
 * @param {Node} node A tree root node
 * @returns An array of node data that represents the postorder traversal of the tree.
 */
function postOrderTraverse(node) {
  const traverseArr = [];

  function doTraverse(node) {
    if (node === null) return;
    doTraverse(node.left);
    doTraverse(node.right);
    traverseArr.push(node.data);
  }

  doTraverse(node);
  return traverseArr;
}

module.exports = {
  preOrderTraverse,
  inOrderTraverse,
  postOrderTraverse,
};
