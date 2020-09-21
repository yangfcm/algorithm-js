/**
 * Tree data structure
 * 1. Create a node class.
 * The constructor should accept an argument that gets assigned to the data property
 * and initialize an empty array for sorting children.
 * The node class should have methods 'add' and 'remove'
 * 2. Create a tree class.
 * The constructor should initialize a 'root' property to null.
 * 3. Implement 'traverseBFS' and 'traverseDFS' on the tree class.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBFS(fn) {
    const treeArr = [this.root]; // treeArr is used to store elements of the tree by BFS order
    while (treeArr.length) {
      const node = treeArr.shift(); // Take the first element out of of the array
      treeArr.push(...node.children); // Take all the elements of node's children array and push them to the array
      fn(node); // Process the current node.
    }
  }

  traverseDFS(fn) {
    const treeArr = [this.root];
    while (treeArr.length) {
      const node = treeArr.shift();
      treeArr.unshift(...node.children);
      // Very similar to BFS, but instead of put children's elements at the end of the array,
      // DFS puth children's elements at the head.
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
