const { Node, LinkedList } = require("./linkedlist");

/** Add a  method to LinkedList to partition a linked list around a value x,
 * such that all nodes less than x comes before all nodes greater than or equal to x.
 * The partition element x can appear anywhere in the 'right partition';
 * it does not need to appear between the left and right partitions.
 * e.g. 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
 * after partition: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */
LinkedList.prototype.partition = function (partition) {
  if (!this.head) {
    return;
  }
  if (typeof partition !== "number") {
    throw new Error("partition must be a number");
  }
  let partitionList = new LinkedList();
  let node = this.head;
  while (node) {
    if (typeof node.data !== "number") {
      throw new Error("node value must be a number");
    }
    if (node.data < partition) {
      partitionList.insertAt(node.data, 0);
    } else {
      partitionList.insertLast(node.data);
    }
    node = node.next;
  }
  return partitionList;
};

module.exports = { Node, LinkedList };
