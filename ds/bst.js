/**
 * Binary Search Tree
 * 1. Implement the Node class to create a binary search tree.
 * The constructor should initialize values 'data', 'left' and 'right'
 * 2. Implement the 'insert' method for the Node class.
 * Insert should accept an argument 'data', 
 * then create a new node and insert it at the appropriate location in the tree.
 * 3. Implement the 'contain' method for the Node class.
 * Contain should accept a 'data' argument and return the Node in the tree with the same value
 * If the value isn't in the tree, return null.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if(data < this.data && this.left) {
      this.left.insert(data);
    } else if(data < this.data) {
      this.left = new Node(data);
    } else if(data > this.data && this.right) {
      this.right.insert(data);
    } else if(data > this.data) {
      this.right = new Node(data);
    }
  }

  contain(data) {
    if(this.data === data) {
      return this;
    }

    if(this.data < data && this.right) {
      return this.right.contain(data);
    } else if(this.data > data && this.left) {
      return this.left.contain(data);
    } 

    return null;
  }
}

 module.exports = Node;