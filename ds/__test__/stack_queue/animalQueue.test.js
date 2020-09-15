const { AnimalQueue, ANIMAL } = require("../../stack_queue/animalQueue");

describe("Test AnimalQueue class", () => {
  let animalQueue, emptyAnimalQueue;
  beforeEach(() => {
    emptyAnimalQueue = new AnimalQueue();
    animalQueue = new AnimalQueue();
    animalQueue.enqueue(ANIMAL.CAT);
    animalQueue.enqueue(ANIMAL.DOG);
    animalQueue.enqueue(ANIMAL.DOG);
    animalQueue.enqueue(ANIMAL.DOG);
    animalQueue.enqueue(ANIMAL.CAT);
    animalQueue.enqueue(ANIMAL.CAT);
    animalQueue.enqueue(ANIMAL.DOG);
  });
  it("AnimalQueue class should be defined", () => {
    expect(AnimalQueue).toBeDefined();
  });

  it("should return null if animal queue is empty", () => {
    expect(emptyAnimalQueue.dequeueAny()).toBe(null);
    expect(emptyAnimalQueue.dequeueCat()).toBe(null);
    expect(emptyAnimalQueue.dequeueDog()).toBe(null);
  });

  it("should dequeue first animal", () => {
    expect(animalQueue.dequeueAny()).toEqual({ animal: ANIMAL.CAT, order: 0 });
    expect(animalQueue.dequeueAny()).toEqual({ animal: ANIMAL.DOG, order: 1 });
    expect(animalQueue.dequeueAny()).toEqual({ animal: ANIMAL.DOG, order: 2 });
    expect(animalQueue.dequeueAny()).toEqual({ animal: ANIMAL.DOG, order: 3 });
    expect(animalQueue.dequeueAny()).toEqual({ animal: ANIMAL.CAT, order: 4 });
    expect(animalQueue.dequeueAny()).toEqual({ animal: ANIMAL.CAT, order: 5 });
    expect(animalQueue.dequeueAny()).toEqual({ animal: ANIMAL.DOG, order: 6 });
    expect(animalQueue.dequeueAny()).toBe(null);
  });

  it("should dequeue first cat", () => {
    expect(animalQueue.dequeueCat()).toEqual({ animal: ANIMAL.CAT, order: 0 });
    expect(animalQueue.dequeueCat()).toEqual({ animal: ANIMAL.CAT, order: 4 });
    expect(animalQueue.dequeueCat()).toEqual({ animal: ANIMAL.CAT, order: 5 });
    expect(animalQueue.dequeueCat()).toBe(null);
  });

  it("should dequeue first dog", () => {
    expect(animalQueue.dequeueDog()).toEqual({ animal: ANIMAL.DOG, order: 1 });
    expect(animalQueue.dequeueDog()).toEqual({ animal: ANIMAL.DOG, order: 2 });
    expect(animalQueue.dequeueDog()).toEqual({ animal: ANIMAL.DOG, order: 3 });
    expect(animalQueue.dequeueDog()).toEqual({ animal: ANIMAL.DOG, order: 6 });
    expect(animalQueue.dequeueDog()).toBe(null);
  });
});
