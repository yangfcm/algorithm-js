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

  contain(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contain(data);
    } else if (this.data > data && this.left) {
      return this.left.contain(data);
    }

    return null;
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
}

module.exports = BinarySearchTree;
