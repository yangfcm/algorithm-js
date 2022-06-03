const { LinkedList } = require("./linkedlist");

/**
 * You have two numbers represented by a linked list, where each node contains a single digit.
 * The digits are stored in reverse order, such that the 1's digit is at the head of the list
 * Write a function that adds the two numbers and returns the sum as a linked list
 * e.g. (7 -> 1 -> 6) + (5 -> 9 -> 2) => 617+295 = 912 => 2 -> 1 -> 9
 *
 * Then suppose the digits are stored in forward order. Repeat the above problem
 * e.g. (6 -> 1 -> 7) + (2 -> 9 -> 5) => 617+295 = 912 => 9 -> 1 -> 2
 * Do not convert to number! and consider the case that two lists have different length.
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

module.exports = sumLists;
