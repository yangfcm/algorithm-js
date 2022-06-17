/**
 * @name weave
 * @description Given two queues and combine the contents of each into a new, third queue.
 * The new queue should contain the alterating of the two queues.
 * The function should handle queues of different lengths without inserting 'undefined' into the new one
 * DO NOT access the array inside of any queue, only use 'add', 'remove' and 'peek' methods
 * @example const queueOne = new Queue();
 *  queueOne.add(1);
 *  queueOne.add(2);
 *  const queueTwo = new Queue();
 *  queueTwo.add('Hi');
 *  queueTwo.add('There');
 *  const q = weave(queueOne, queueTwo); // q should be like [1, 'Hi', 2, 'There']
 *  q.remove()  // 1
 *  q.remove()  // 'Hi'
 *  q.remove()  // 2
 *  q.remove() // 'There'
 * @param {Queue} queue1
 * @param {Queue} queue2
 *  @returns {Queue}
 */

const Queue = require("./queue");

function weave(queue1, queue2) {
  const q = new Queue();
  while (queue1.peek() || queue2.peek()) {
    if (queue1.peek()) {
      q.add(queue1.remove());
    }
    if (queue2.peek()) {
      q.add(queue2.remove());
    }
  }
  return q;
}

module.exports = weave;
