const { Node, LinkedList } = require("./linkedlist");

/**
 * Add a method to LinkedList to remove duplicate node from the linked list.
 */
LinkedList.prototype.removeDuplicate = function () {
  if (!this.head) {
    return;
  }
  let prev = this.head;
  let node = prev.next;
  const existingData = [prev.data]; // Use an array to store the data that appears in the linked list.
  while (node) {
    if (existingData.includes(node.data)) {
      // If the current node's data appeared before...
      prev.next = node.next ? node.next : null;
      node = node.next;
    } else {
      existingData.push(node.data);
      prev = prev.next;
      node = node.next;
    }
  }
};

module.exports = { Node, LinkedList };
