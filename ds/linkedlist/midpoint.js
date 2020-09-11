/**
 * Midepoint
 * Get the middle node of a linked list.
 * If the list has an even number of elements, 
 * return the node at the end of the first half of the list.
 * DO NOT use a counter variable.
 * DO NOT retrieve the size of the list
 * Only iterate through the list one time 
 */

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  // Set two temporary variables, slow and fast
  // While iterating the list, slow advances with one step,
  // fast advaces with two steps. If fast.next OR fast.next.next is null,
  // slow is exactly the middle node of the list.
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;