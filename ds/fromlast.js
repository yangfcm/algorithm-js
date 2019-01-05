/**
 * Give a linked list and integer n, return the element n spaces
 * from the last node in the list.
 * Example
 * const list = new List();
 * list.insertLast('a');
 * list.insertLast('b');
 * list.insertLast('c');
 * list.insertLast('d');
 * fromLast(list, 2).data;   // 'b'
 */

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;
  while(n > 0) {  // Move fast advance by n steps.
    fast = fast.next;
    n--;
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;