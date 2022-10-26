const Node = require("./bst");
const { inOrderTraverse } = require("./bTreeTraverse");

/**
 * @name swapNodes
 * @resources https://www.hackerrank.com/challenges/swap-nodes-algo/problem
 */

/**
 * @description Given a 2D array (indexes), return a tree root node that is represented by the array.
 * Its root node is always 1 and its leaf nodes are natural numbers: 2, 3, 4, 5 ... -1 means no node for this position.
 * @example indexes = [
      [2, 3],
      [4, -1],
      [5, -1],
      [6, -1],
      [7, 8],
      [-1, 9],
      [-1, -1],
      [10, 11],
      [-1, -1],
      [-1, -1],
      [-1, -1],
    ]
    Its corresponding tree should look like:
            1
           / \
          2   3
         /   /
        4    5
       /    /\
      6    7  8
       \      /\
        9    10 11 
 * @param {array} indexes
 * @returns Tree root node
 */
function buildTree(indexes) {
  const nodeIndexes = [];
  const nodesMap = {
    1: new Node(1),
  };
  for (let idx of indexes) {
    const left = idx[0] === -1 ? null : new Node(idx[0]);
    const right = idx[1] === -1 ? null : new Node(idx[1]);
    if (left) nodesMap[left.data] = left;
    if (right) nodesMap[right.data] = right;
    nodeIndexes.push([left, right]);
  }

  for (let i = 0; i < nodeIndexes.length; i++) {
    nodesMap[i + 1].left = nodeIndexes[i][0];
    nodesMap[i + 1].right = nodeIndexes[i][1];
  }
  return nodesMap[1];
}

function swapNodes(indexes, queries) {
  const tree = buildTree(indexes);
  const traversalBeforeSwap = inOrderTraverse(tree);
  // Do swap

  const traversalAfterSwap = inOrderTraverse(tree);
}

module.exports = { buildTree };
