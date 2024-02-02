/**
 * @name priorityQueue
 * @description Implement a priority queue.
 * A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority.
 * This could be simply represented with an integer.
 * Item priority will override placement order in determining the sequence items are dequeued.
 * If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.
 * For instance, let’s imagine we have a priority queue with three items:
 * [['kitten', 2], ['dog', 2], ['rabbit', 2]]
 * Here the second value (an integer) represents item priority. If we enqueue ['human', 1] with a priority of 1
 * (assuming lower priorities are given precedence) it would then be the first item to be dequeued.
 * The collection would look like this:
 * [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
 * Implement a priority queue with the methods of:
 * 1. enqueue: adding an item with a priority.
 * 2. dequeue: remove and return an item.
 * 3. peek: return the element at the front of the queue.
 * 4. size: return the size of the queue.
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class
 */
class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(data) {
    let pos = 0;
    while (pos < this.collection.length && data[1] >= this.collection[pos][1]) {
      pos++;
    }
    this.collection.splice(pos, 0, data);
  }

  dequeue() {
    const item = this.collection.shift();
    return item?.[0];
  }

  peek() {
    return this.collection[0] ? this.collection[0][0] : null;
  }

  size() {
    return this.collection.length;
  }
}

module.exports = PriorityQueue;
