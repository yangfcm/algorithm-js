const Node = require("./bst");
const { inOrderTraverse } = require("./bTreeTraverse");
const { listOfDepthsAlt: listOfDepths } = require("./listOfDepths");

/**
 * @name swapNodes
 * @description For detailed description and examples, refer to the below link
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

/**
 * @param {array} indexes
 * @param {array} queries
 * @returns An array of inorder traversal of the tree after each swap.
 * @solution It actually involves a number of child problems.
 * 1. Need to create a b-tree from indexes (buildTree)
 * 2. Create an array for each level of the tree (listOfDepths)
 * 3. Inorder traverse a tree (inOrderTraverse)
 * With the above three problems solved, the swap operation itself is easy.
 * Just iterate nodes throughout a level and swap each node's left child and right child.
 */
function swapNodes(indexes, queries) {
  const traversalResults = [];
  const tree = buildTree(indexes);
  const levelsList = listOfDepths(tree);
  const depths = levelsList.length;
  for (let q of queries) {
    let k = 1;
    let level = k * q; // For each q, swap the nodes at level q, 2*q, 3*q ... until it reaches the end of the tree.
    while (level <= depths) {
      const levelNodes = levelsList[level - 1];
      for (let node of levelNodes) {
        [node.left, node.right] = [node.right, node.left];
      }
      k++;
      level = k * q;
    }
    const traversalAfterSwap = inOrderTraverse(tree);
    traversalResults.push(traversalAfterSwap);
  }

  return traversalResults;
}

module.exports = { swapNodes };
