/**
 * @name fromLast
 * @description Give a linked list and integer n, return the element n spaces from the last node in the list.
 * @example
 * const list = new List();
 * list.insertLast('a');
 * list.insertLast('b');
 * list.insertLast('c');
 * list.insertLast('d');
 * fromLast(list, 0).data; // 'd' The last node data
 * fromLast(list, 1).data; // 'c' The second last node data
 * @param {LinkedList} list
 * @returns {Node}
 * @solution Set two temporary variables, slow and fast, which both reference the first node of linked list initially.
 * Move the fast in advance by n steps.
 * Then move slow and fast until fast hits the end of linked list. Now, the node referenced by slow is exactly what you want to find.
 */
function fromLast(list, n) {
  if (n > list.size() - 1) return null;
  let slow = list.head;
  let fast = list.head;
  while (n > 0) {
    // Move fast advance by n steps.
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
