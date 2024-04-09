/**
 * @name bst
 * @description Implement Binary Search Tree
 * 1. Implement the Node class to create a binary search tree.
 * The constructor should initialize values 'data', 'left' and 'right'
 * 2. Implement the 'insert' method for the Node class.
 * Insert should accept an argument 'data',
 * then create a new node and insert it at the appropriate location in the tree.
 * 3. Implement the 'contain' method for the Node class.
 * Contain should accept a 'data' argument and return the Node in the tree with the same value
 * If the value isn't in the tree, return null.
 * 4. Implement 'findMin' and 'findMax' to find out the min and max value in the tree.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      return (this.root = newNode);
    }

    let currentNode = this.root;
    while (currentNode) {
      // If the data exists in the BST, return null;
      if (currentNode.data === data) {
        return null;
      }
      if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
        }
      }

      if (data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
        }
      }
    }
  }

  // Check if the given data exists in the BST.
  contain(data) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      }
      if (data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
    return false;
  }

  findMin() {
    if (!this.root) return null;

    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    if (!this.root) return null;

    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  // Get the shortest route from the root to its leaf. Return the number of the level.
  findMinHeight() {
    if (!this.root) return -1;

    function findNodeMinHeight(node) {
      if (!node) return 0;

      return (
        1 +
        Math.min(findNodeMinHeight(node.left), findNodeMinHeight(node.right))
      );
    }

    return findNodeMinHeight(this.root) - 1;
  }

  // Get the longest route from the root to its leaf. Return the number of the level.
  findMaxHeight() {
    if (!this.root) return -1;

    function findNodeMaxHeight(node) {
      if (!node) return 0;

      return (
        1 +
        Math.max(findNodeMaxHeight(node.left), findNodeMaxHeight(node.right))
      );
    }

    return findNodeMaxHeight(this.root) - 1;
  }

  isBalanced() {
    return this.findMaxHeight() === this.findMinHeight();
  }

  /**
   * @name remove
   * @description Remove a node with the given value from BST.
   * @param {number} data
   * @returns The node deleted if the node of value exists, null otherwise.
   * @solution Remove a node from a BST can be tricky. You need to consider 3 scenarios:
   * 1. Delete a leaf node. This is the easiest case: just find the node and assign the node as null.
   * 2. Delete a node with single child. It's also simple: copy the child to the node and delete the node.
   * 3. Delete a node with two children. It's the trickiest which involves the re-arrangement of the BST.
   */
  remove(data) {
    // Empty tree
    if (!this.root) return null;

    let parent;
    let currentNode = this.root;

    while (currentNode && currentNode.data !== data) {
      parent = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (!currentNode) return null; // Node to remove is not found.

    // The case when tree has only one (root) node and what we want to remove is exactly the node.
    if (!parent) {
      const toRemoveNode = { ...this.root };
      this.root = null;
      return toRemoveNode;
    }

    if (parent.left === currentNode) {
      const toRemoveNode = { ...currentNode };
      parent.left = null;
      return toRemoveNode;
    }

    if (parent.right === currentNode) {
      const toRemoveNode = { ...currentNode };
      parent.right = null;
      return toRemoveNode;
    }
  }
}

module.exports = BinarySearchTree;

module.exports.Node = Node;
