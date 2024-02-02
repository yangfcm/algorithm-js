const PriorityQueue = require("../../stack_queue/priorityQueue");

describe("Test priorityQueue.js", () => {
  let q;

  beforeEach(() => {
    q = new PriorityQueue();
    q.enqueue(["a", 20]);
    q.enqueue(["b", 30]);
    q.enqueue(["c", 10]);
    q.enqueue(["d", 40]);
  });

  test("Peek method returns the first element from priority queue", () => {
    expect(q.peek()).toBe("c");
  });

  test("Size method should return the size of the queue", () => {
    expect(q.size()).toBe(4);
  });

  test("Order of the priority queue should be maintained by priority", () => {
    expect(q.dequeue()).toBe("c");
    expect(q.dequeue()).toBe("a");
    expect(q.dequeue()).toBe("b");
    expect(q.dequeue()).toBe("d");
  });

  test("New item should be enqueued by priority - in the middle", () => {
    expect(q.enqueue(["e", 25]));
    expect(q.dequeue()).toBe("c");
    expect(q.dequeue()).toBe("a");
    expect(q.dequeue()).toBe("e");
    expect(q.dequeue()).toBe("b");
    expect(q.dequeue()).toBe("d");
  });

  test("New item should be enqueued by priority - at the top", () => {
    expect(q.enqueue(["e", 1]));
    expect(q.dequeue()).toBe("e");
  });

  test("New item should be enqueued by priority - at the bottom", () => {
    expect(q.enqueue(["e", 50]));
    expect(q.dequeue()).toBe("c");
    expect(q.dequeue()).toBe("a");
    expect(q.dequeue()).toBe("b");
    expect(q.dequeue()).toBe("d");
    expect(q.dequeue()).toBe("e");
  });
});
