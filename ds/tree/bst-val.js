/**
 * Given a node, validate the binary search tree,
 * ensuring that every node's left hand child is 
 * less than the parent node's value and that every
 * node's right hand child is larger than the parent
 */

function bstVal(node, min = null, max = null) {
  if(max !== null && node.data > max) {
    return false;
  }
  if(min !== null && node.data < min) {
    return false;
  }

  if(node.left && !bstVal(node.left, min, node.data) ) {
    return false;
  }
  if(node.right && !bstVal(node.right, node.data, max) ) {
    return false;
  }

  return true;
}

module.exports = bstVal;