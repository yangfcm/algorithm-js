/**
 * @name bst-val
 * @description Given a node, validate if it is a binary search tree,
 * ensuring that every node's left hand child is
 * less than the parent node's value and that every
 * node's right hand child is larger than the parent
 * @param {Node} node
 * @returns {boolean}
 */

function bstVal(tree) {
  function isBinarySubTree(node, min = null, max = null) {
    if (!node) return true;
    if (max !== null && node.data > max) {
      return false;
    }
    if (min !== null && node.data < min) {
      return false;
    }

    if (node.left && !isBinarySubTree(node.left, min, node.data)) {
      return false;
    }
    if (node.right && !isBinarySubTree(node.right, node.data, max)) {
      return false;
    }

    return true;
  }
  return isBinarySubTree(tree.root);
}

module.exports = bstVal;
