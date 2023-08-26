const { LinkedList, Node } = require("./linkedlist");

/**
 * @name sumLists
 * @description Given two numbers represented by a linked list, where each node contains a single digit.
 * The digits are stored in reverse order, such that the 1's digit is at the head of the list
 * Write a function that adds the two numbers and returns the sum as a linked list
 * @example (7 -> 1 -> 6) + (5 -> 9 -> 2) => 617+295 = 912 => 2 -> 1 -> 9
 * (9 -> 9 -> 9 -> 9) + (1) => 9999 + 1 => 10000 -> 0 -> 0 -> 0 -> 0 -> 1
 * Do not convert linked list to number and consider the case when two lists have different length.
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 * @returns {LinkedList}
 * @source https://leetcode.com/problems/add-two-numbers/description/
 */
const sumLists = (list1, list2) => {
  const sumList = new LinkedList();
  size1 = list1.size();
  size2 = list2.size();
  maxSize = size1 > size2 ? size1 : size2;
  node1 = list1.head;
  node2 = list2.head;

  for (let i = 0; i < maxSize; i++) {
    digit1 = node1 ? node1.data : 0;
    digit2 = node2 ? node2.data : 0;
    lastNode = sumList.getLast();
    lastDigit = lastNode ? lastNode.data : 0;
    sumList.removeLast();

    digitSum = digit1 + digit2 + lastDigit;
    sumList.insertLast(digitSum % 10);
    sumList.insertLast(Math.floor(digitSum / 10));

    if (!!node1) node1 = node1.next;
    if (!!node2) node2 = node2.next;
  }
  return sumList;
};

/**
 * @name sumListNodes
 * @description The above solution makes use of the methods of LinkedList.
 * This solution would just use the Node class.
 * @param {Node} node1
 * @param {Node} node2
 * @returns {Node}
 */
const sumListNodes = (node1, node2) => {
  const sumNode = new Node();
  let carry = 0;
  let cursor = sumNode;
  while (node1 || node2 || carry) {
    const sum = (node1?.data || 0) + (node2?.data || 0) + carry;
    carry = Math.floor(sum / 10);
    cursor.next = new Node(sum % 10);
    cursor = cursor.next;
    node1 = node1?.next;
    node2 = node2?.next;
  }
  return sumNode.next;
};
module.exports = { sumListNodes, sumLists };
