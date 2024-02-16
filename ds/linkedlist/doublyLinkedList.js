/**
 * @name Node
 * @description Node class for doubly linked list.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @name DoublyLinkedList
 * @description Implement doubly linked list class.
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * @name append
   * @description Add a node with given data to the end of linked list.
   * @param {any} data
   * @returns {undefined}
   */
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
  }

  /**
   * @name remove
   * @description Remove all the node(s) with given data in the list.
   * @param {any} data
   * @returns {any} The removed data if data is found. Otherwise, undefined.
   */
  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        }
        return data;
      }
      current = current.next;
    }
  }

  /**
   * @name size
   * @description Get the size of the linked list (how many elements)
   * @returns {number}
   */
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  /**
   * @name getAll
   * @description Get all elements in the linked list.
   * @returns {array}
   */
  getAll() {
    const elements = [];
    let node = this.head;
    while (node) {
      elements.push(node.data);
      node = node.next;
    }
    return elements;
  }

  reverse() {
    if (!this.head) return;
    let current = this.head;
    let newHead = null;
    while (current) {
      [current.next, current.prev] = [current.prev, current.next];
      newHead = current;
      current = current.prev;
    }
    this.head = newHead;
  }
}

module.exports = { Node, DoublyLinkedList };
