const promiseAll = require("../promiseAll");

describe("Test promiseAll.js", () => {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 100);
  });
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, 100);
  });
  test("Return empty array of values when there's no promise passes", async () => {
    const result = await promiseAll([]);
    expect(result).toEqual([]);
  });

  test("Test with non-promises", async () => {
    const result = await promiseAll([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  test("Return a promise of resolved values", async () => {
    const result = await promiseAll([promise1, promise2, promise3]);
    expect(result).toEqual([3, 42, "foo"]);
  });

  test("Reject if there's on rejected promise", () => {
    expect(
      promiseAll([promise1, promise2, promise3, promise4])
    ).rejects.toMatch("Error");
  });
});
