/**
 * Weave: Receive two queues as arguments and combines the contents of each into a new, third queue.
 * The new queue should contain the alterating of the two queues.
 * The function should handle queues of different lengths without inserting 'undefined' into the new one
 * DO NOT access the array inside of any queue, only use 'add', 'remove' and 'peek' methods
 *  Example
    const queueOne = new Queue();
    queueOne.add(1);
    queueOne.add(2);
    const queueTwo = new Queue();
    queueTwo.add('Hi');
    queueTwo.add('There');
    const q = weave(queueOne, queueTwo);
    q.remove()  // 1
    q.remove()  // 'Hi'
    q.remove()  // 2
    q.remove() // 'There' 
 */

 const Queue = require('./queue');

 function weave(queue1, queue2) {
  const q = new Queue();
  while(queue1.peek() || queue2.peek()) {
    if(queue1.peek()) {
      q.add(queue1.remove());
    }
    if(queue2.peek()) {
      q.add(queue2.remove());
    }
  }

  return q;
 }

 module.exports = weave;