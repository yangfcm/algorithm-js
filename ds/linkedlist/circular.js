/**
 * Circular
 * Given a linked list, return true if it is circular, false if it is not.
 * Example:
 * const l = new List();
 * const a = new Node('a');
 * const b = new Node('b');
 * const c = new Node('c');
 * l.head = a;
 * a.next = b;
 * b.next = c;
 * c.next = b;
 * circular(l) // true
 */
function circular(list) {
  let slow = list.head;
  let fast = list.head;
  // Set two temporary variables, slow and fast
  // While iterating the list, slow advances with one step,
  // fast advaces with two steps. 
  // If slow === fast, it means they meet at some point of the list
  // so it is a circular list and returns true, otherwise return false.

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      return true;
    }

  }
  // 
  return false;
}

module.exports = circular;