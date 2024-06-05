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
 * 5. Implement 'remove' to remove a node with the given value.
 * 6. Implement 'invert' to invert a BST.
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

  findMin(node = this.root) {
    if (!node) return null;

    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  findMax(node = this.root) {
    if (!node) return null;

    let current = node;
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

    // Find the node to delete and its parent node.
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
    const nodeToRemove = { ...currentNode };

    // Scenario 1: Delete leaf node.
    if (!currentNode.left && !currentNode.right) {
      // The case when tree has only one (root) node and what we want to remove is exactly the node.
      if (currentNode === this.root) {
        this.root = null;
        return nodeToRemove;
      }

      if (parent.left === currentNode) {
        parent.left = null;
        return nodeToRemove;
      }

      if (parent.right === currentNode) {
        parent.right = null;
        return nodeToRemove;
      }
    }

    // Scenario 2: The node has one child.
    if (
      (currentNode.left && !currentNode.right) ||
      (!currentNode.left && currentNode.right)
    ) {
      if (currentNode === this.root) {
        // The case when tree has two nodes(one root node and one left/right child node) and what we want to remove is the root node.
        this.root = currentNode.left || currentNode.right;
        return nodeToRemove;
      }

      if (parent.left === currentNode) {
        parent.left = currentNode.left || currentNode.right;
        return nodeToRemove;
      }

      if (parent.right === currentNode) {
        parent.right = currentNode.left || currentNode.right;
        return nodeToRemove;
      }
    }

    // Scenario 3: The node has two children.
    // In this case, the remove operation literally splits a tree into two sub-trees and what needs to do is connect the two sub-trees into one.
    // One way to reconnect two sub-trees is to find the minimum node in the right subtree and replace the node to remove with this value.
    // Once the replacement is done, the replacement node must be removed from the right subtree.
    if (currentNode.left && currentNode.right) {
      const newChildValue = this.findMin(currentNode.right);
      this.remove(newChildValue);
      currentNode.data = newChildValue;
      return nodeToRemove;
    }
  }

  /**
   * @name invert
   * @description Invert a BST, that is to produce a new tree that is
   * equivalently the mirror image of the tree.
   * Running an inorder traversal on an inverted tree will explore the nodes in reverse order 
   * when compared to the inorder traversal of the original tree. 
   * @param {BST} node 
   * @returns 
   */
  invert(node = this.root) {
    if (!node) return null;

    [node.left, node.right] = [node.right, node.left];
    this.invert(node.left);
    this.invert(node.right);
  }
}

module.exports = BinarySearchTree;

module.exports.Node = Node;
