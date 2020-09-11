const { LinkedList } = require("./linkedlist");

/**
 * You have two numbers represented by a linked list, where each node contains a single digit.
 * The digits are stored in reverse order, such that the 1's digit is at the head of the list
 * Write a function that adds the two numbers and returns the sum as a linked list
 * e.g. (7 -> 1 -> 6) + (5 -> 9 -> 2) => 617+295 = 912 => 2 -> 1 -> 9
 *
 * Then suppose the digits are stored in forward order. Repeat the above problem
 * e.g. (6 -> 1 -> 7) + (2 -> 9 -> 5) => 617+295 = 912 => 9 -> 1 -> 2
 * Difficult: Do not convert to number. How to do that?
 */
const sumListsRev = (list1, list2) => {
  const num1 = convertListToNumber(list1, -1);
  const num2 = convertListToNumber(list2, -1);
  const sum = num1 + num2;
  return convertNumberToList(sum, -1);
};

const sumListsFwd = (list1, list2) => {
  const num1 = convertListToNumber(list1, 1);
  const num2 = convertListToNumber(list2, 1);
  const sum = num1 + num2;
  return convertNumberToList(sum, 1);
};

/**
 * Convert a linked list to a number, if direction is a number bigger than or equal 0, then convert it forwardly.
 * If direction is a number less than 0, convert it reversely.
 * e.g. list (7 -> 1 -> 6) direction 1 => 716, list (7 -> 1 -> 6) direction -1 => 617
 * @param {LinkedList} list
 * @param {number} direction
 */
const convertListToNumber = (list, direction = 1) => {
  let numberStr = "";
  list.forEach((node, index) => {
    numberStr =
      direction >= 0
        ? numberStr + node.data.toString()
        : node.data.toString() + numberStr;
  });
  return Number(numberStr);
};

/**
 * Convert a number to a linked list, if direction is a number bigger than or equal 0, then convert it forwardly.
 * If direction is a number less than 0, convert it reversely.
 * e.g. number 912 direction 1 => 9 -> 1 -> 2, direction -1 => 2 -> 1 -> 9
 * @param {number} number
 * @param {number} direction
 */
const convertNumberToList = (number, direction = 1) => {
  if (typeof number !== "number") {
    throw new Error("First argument must be a number");
  }
  if (typeof direction !== "number") {
    throw new Error("Second argument must be a number");
  }
  const numberStr = number.toString();
  const list = new LinkedList();
  for (let numChar of numberStr) {
    if (direction >= 0) {
      list.insertLast(Number(numChar));
    } else {
      list.insertFirst(Number(numChar));
    }
  }
  return list;
};

module.exports = {
  sumListsRev,
  sumListsFwd,
};
