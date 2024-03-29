/**
 * @name animalQueue
 * @description An animal queue, which holds only dogs and cats, operates on a strictly "fist in, first out" basis.
 * People must adopt either the first of all animals at the shelter,
 * or they can select whether they would prefer the first dog or the first cat(cannot select a specific animal they like)
 * Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, dequeueCat.
 */
const Queue = require("./queue");
const ANIMAL = {
  CAT: "cat",
  DOG: "dog",
};

class AnimalQueue {
  constructor() {
    this.order = 0;
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  /**
   * @name enqueue
   * @description Add a CAT or DOG to the animal queue.
   * @param {ANIMAL} data
   * @returns {undefined}
   */
  enqueue(data) {
    if (data === ANIMAL.CAT) {
      this.catQueue.add({
        animal: ANIMAL.CAT,
        order: this.order,
      });
    } else if (data === ANIMAL.DOG) {
      this.dogQueue.add({
        animal: ANIMAL.DOG,
        order: this.order,
      });
    } else {
      throw new Error(
        `The enqueue data must be either ${ANIMAL.CAT} or ${ANIMAL.DOG}`
      );
    }
    this.order++;
  }

  /**
   * @name dequeueDog
   * @description Remove a DOG from the queue
   * @returns {ANIMAL.DOG} DOG removed or null if there is no dog left.
   */
  dequeueDog() {
    return this.dogQueue.peek() ? this.dogQueue.remove() : null;
  }

  /**
   * @name dequeueCat
   * @description Remove a CAT from the queue
   * @returns {ANIMAL.CAT} CAT removed or null if there is no cat left.
   */
  dequeueCat() {
    return this.catQueue.peek() ? this.catQueue.remove() : null;
  }

  /**
   * @name dequeueAny
   * @description Remove a DOG or CAT from the queue.
   * @returns {ANIMAL} CAT or DOG removed or null if there is no animal left.
   */
  dequeueAny() {
    const firstCat = this.catQueue.peek();
    const firstDog = this.dogQueue.peek();
    if (!firstCat && !firstDog) return null;
    if (firstCat && !firstDog) return this.catQueue.remove();
    if (!firstCat && firstDog) return this.dogQueue.remove();
    if (firstCat && firstDog)
      return firstCat.order < firstDog.order
        ? this.catQueue.remove()
        : this.dogQueue.remove();
  }
}

module.exports = { AnimalQueue, ANIMAL };
