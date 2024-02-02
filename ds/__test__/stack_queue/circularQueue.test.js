const CircularQueue = require("../../stack_queue/circularQueue");

describe("Test circularQueue", () => {
  let q;

  beforeEach(() => {
    q = new CircularQueue(5);
    q.enqueue("a");
    q.enqueue("b");
    q.enqueue("c");
  });

  test("All elements are null initially", () => {
    const initialQ = (q = new CircularQueue(3));
    expect(initialQ.getQueue()).toEqual([null, null, null]);
  });

  test("q should have correct elements", () => {
    expect(q.getQueue()).toEqual(["a", "b", "c", null, null]);
  });

  test("Elements can be dequeued in order and set as null after dequeued", () => {
    expect(q.dequeue()).toBe("a");
    expect(q.getQueue()).toEqual([null, "b", "c", null, null]);

    expect(q.dequeue()).toBe("b");
    expect(q.getQueue()).toEqual([null, null, "c", null, null]);

    expect(q.dequeue()).toBe("c");
    expect(q.getQueue()).toEqual([null, null, null, null, null]);

    expect(q.dequeue()).toBe(null); // Read pointer cannot go past write pointer.
  });

  test("Elements can be enqueued in order", () => {
    expect(q.enqueue("d")).toBe("d");
    expect(q.getQueue()).toEqual(["a", "b", "c", "d", null]);

    expect(q.enqueue("e")).toBe("e");
    expect(q.getQueue()).toEqual(["a", "b", "c", "d", "e"]);

    expect(q.enqueue("f")).toBe(null);
    expect(q.getQueue()).toEqual(["a", "b", "c", "d", "e"]); // Write pointer overwrite the elements that haven't been read.
  });

  test("Can be enqueued and dequeued in a circular way", () => {
    q.dequeue(); // Dequeue 'a'.
    q.dequeue(); // Dequeue 'b'.
    q.enqueue("d"); // Enqueue 'd'
    q.enqueue("e"); // Enqueue 'e'
    expect(q.getQueue()).toEqual([null, null, "c", "d", "e"]);

    q.enqueue("f"); // Enqueue 'f'
    expect(q.getQueue()).toEqual(["f", null, "c", "d", "e"]);

    q.enqueue("g"); // Enqueue 'g'
    expect(q.getQueue()).toEqual(["f", "g", "c", "d", "e"]);

    expect(q.dequeue()).toBe("c");
    expect(q.dequeue()).toBe("d");
    expect(q.dequeue()).toBe("e");
    expect(q.dequeue()).toBe("f");
    expect(q.dequeue()).toBe("g");
  });
});
