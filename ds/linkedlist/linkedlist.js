/**
 * @name Node
 * @description Implement Node class for linked list.
 * It has property: data and next which references the next node in linked list.
 * For more details see: linkedlist.html
 */
class Node {
  /**
   * @param {any} data the data saved in the node
   * @param {Node} next reference next Node in linked list
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * @name LinkedList
 * @description Implement LinkedList class.
 */
class LinkedList {
  constructor() {
    this.head = null; // head property is a refernce to Node object in linked list
    // It has value null by default.
  }

  /**
   * @name insertFirst
   * @description Insert a node to the head of a linked list.
   * @param {any} data
   * @returns {undefined}
   */
  insertFirst(data) {
    // const node = new Node(data, this.head);
    // this.head = node;
    this.insertAt(data, 0); // Reuse the exiting method in the class
  }

  /**
   * @name size
   * @description Get the size of a linked list. i.e. how many elements.
   * @returns {number} The number of elements.
   */
  size() {
    // Get the size of a linked list
    let count = 0;
    let node = this.head; // Save the head position
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  /**
   * @name getFirst
   * @description Get the first node of a linked list.
   * @returns {Node}
   */
  getFirst() {
    return this.head;
  }

  /**
   * @name getLast
   * @description Get the last node of a linked list.
   * @returns {Node}
   */
  getLast() {
    // Get the last node in a linked list
    // if(!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while(node.next) {
    //   node = node.next;
    // }
    // return node;
    return this.getAt(this.size() - 1);
  }

  /**
   * @name clear
   * @description Empty the linked list. i.e. Set the head as null.
   * @returns {undefined}
   */
  clear() {
    this.head = null;
  }

  /**
   * @name removeFirst
   * @description Remove the first node of a linked list.
   * @returns {undefined}
   */
  removeFirst() {
    if (!this.head) {
      // If the linked list is empty, nothing to remove.
      return;
    }
    this.head = this.head.next;
  }

  /**
   * @name removeLast
   * @description Remove the last node of a linked list (Set the last second node's next property as null)
   * @returns
   */
  removeLast() {
    if (!this.head) {
      // If the linked list is empty, nothing to remove.
      return;
    }
    let node = this.head;
    if (!node.next) {
      // If there is only one node in the linked list, just remove this one or say... empty the linked list
      this.head = null;
      return;
    }
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }

  /**
   * @name insertLast
   * @description Append a node to the tail of a linked list
   * @param {any} data
   * @returns {undefined}
   */
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  /**
   * @name getAt
   * @description Get the node at a given index.
   * @param {number} index
   * @returns {Node}
   */
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null; // The index is out of bounds or list is empty
  }

  /**
   * @name removeAt
   * @description Remove the node at a given index
   * @param {number} index
   * @returns {undefined}
   */
  removeAt(index) {
    // Remove the node with a given index
    if (!this.head) {
      // If the list is empty
      return;
    }

    if (index === 0) {
      // Delete the first node
      this.head = this.head.next;
      return;
    }

    const node = this.getAt(index);
    const previous = this.getAt(index - 1);
    if (!node) {
      return;
    }
    previous.next = node.next;
  }

  /**
   * @name insertAt
   * @description Insert a node at a particular position with give index.
   * @param {any} data
   * @param {number} index
   * @returns {undefined}
   */
  insertAt(data, index) {
    // Add a node at a given index
    if (!this.head) {
      // If the list is empty
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      // Insert node at the head
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    // If index out of bounds, append the node to the tail.
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  /**
   * @name forEach
   * @description Iterate through the linked list and apply function to each node.
   * @param {function} fn
   */
  forEach(fn) {
    let node = this.head;
    let index = 0;
    while (node) {
      fn(node, index);
      node = node.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
