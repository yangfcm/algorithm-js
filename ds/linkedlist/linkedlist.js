// Implement classes Node and Linked List
// For more details see: linkedlist.html

class Node {
  /**
   * @param data the data saved in the node
   * @param next reference next Node in linked list
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // head property is a refernce to Node object in linked list
    // It has value null by default.
  }

  insertFirst(data) {
    // Insert a node to the head of a linked list
    // const node = new Node(data, this.head);
    // this.head = node;
    this.insertAt(data, 0); // Reuse the exiting method in the class
  }

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

  getFirst() {
    // Get the first node in a linked list
    return this.head;
  }

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

  clear() {
    // Empty the linked list (Set head as null)
    this.head = null;
  }

  removeFirst() {
    // Remove the first node of a linked list.
    if (!this.head) {
      // If the linked list is empty, nothing to remove.
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    // Remove the last node of a linked list (Set the last two node's next property as null)
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

  insertLast(data) {
    // Append a node to the tail of a linked list
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    // Get the node at a given index
    // if(!this.head) {
    //   return null;
    // }    // Redundant code
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
