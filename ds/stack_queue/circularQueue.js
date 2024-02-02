/**
 * @name circularQueue
 * @description A circular queue is a queue that writes to the end of a collection then begins overwriting itself at the beginning of the collection.
 * This type of data structure is useful in certain situations.
 * For example, a circular queue can be used for streaming media.
 * Once the queue is full, new media data will overwrite old data.
 * Take a circular queue with length of 5.
 * Initially, all elements are null and read and write are both at position '0'.
 * [null, null, null, null, null]
 *  ^R@0                             - R: Read cursor
 *  ^W@0                             - W: Write cursor
 * Now, the queue gets 3 new elements a, b and c. The queue now looks like:
 * [a, b, c, null, null]
 *  ^R@0
 *            ^W@3
 * As the read head reads, it can remove values or keep them.
 * [null, null, null, null, null]
 *                     ^R@3
 *                     ^W@3
 * Now, write d, e and f to the queue. Once the write reaches the end of queue, it loops back to the beginning:
 * [f, null, null, d, e]
 *                 ^R@3
 *      ^W@1
 * Implement a circular queue with the methods of
 * 1. enqueue: When you enqueue items, the write pointer should advance forward and loop back
 * to the beginning once it reaches the end of the queue.
 * The write pointer must not move past the read pointer i.e. our class doesn't allow you to overwrite data that hasn't been read.
 * 2. dequeue: The read pointer should advance forward as you dequeue items.
 * Likewise, the read pointer must not move past the write pointer.
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue
 */
class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.queue.fill(null);
    this.read = 0;
    this.write = 0;
    this.size = size;
  }

  enqueue(item) {
    if (this.write >= this.read + this.size) return null;
    this.queue[this.write % this.size] = item;
    this.write++;
    return item;
  }

  dequeue() {
    if (this.read >= this.write) return null;
    const item = this.queue[this.read % this.size];
    this.queue[this.read % this.size] = null;
    this.read++;
    return item;
  }

  getQueue() {
    return this.queue;
  }
}

module.exports = CircularQueue;
