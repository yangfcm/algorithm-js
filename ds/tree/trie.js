/**
 * @name Trie
 * @description Implement Trie data structure and its relevant methods:
 * 1. Create Node class as a Trie node
 * 2. Implement Trie and add(), isWord(), and print() methods
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-trie-search-tree
 */

class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  isEnd() {
    return this.end;
  }

  setEnd() {
    this.end = true;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.keys.get(char)) {
        currentNode.keys.set(char, new Node());
      }
      currentNode = currentNode.keys.get(char);
    }
    currentNode.setEnd();
  }

  isWord(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.keys.get(char)) {
        return false;
      }
      currentNode = currentNode.keys.get(char);
    }
    return currentNode.isEnd();
  }

  print() {
    const words = [];

    function search(root, word) {
      if (root.keys.keys().length !== 0) {
        for (let char of root.keys.keys()) {
          search(root.keys.get(char), word.concat(char));
        }
        if (root.isEnd()) {
          words.push(word);
        }
      } else {
        if (word.length > 0) words.push(word);
        return;
      }
    }

    search(this.root, "");
    return words;
  }
}

module.exports = { Trie };
