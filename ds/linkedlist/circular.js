/**
 * @name circular
 * @description Given a linked list, return true if it is circular, false if it is not.
 * @example const l = new LinkedList();
 * const a = new Node('a');
 * const b = new Node('b');
 * const c = new Node('c');
 * l.head = a;
 * a.next = b;
 * b.next = c;
 * c.next = b;
 * circular(l) // true
 * @param {LinkedList}
 * @returns {boolean}
 * @solution Set two temporary variables, slow and fast
 * While iterating the list, slow advances with one step while fast advaces with two steps.
 * If slow === fast, it means they meet at some point of the list so it is a circular list and returns true, otherwise return false.
 */
function circular(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

module.exports = circular;
