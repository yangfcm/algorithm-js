const promiseAny = require("../promiseAny");

describe("Test promiseAny.js", () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bar");
    }, 800);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 100);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error - 3");
    }, 50);
  });

  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error - 4");
    }, 150);
  });

  test("Rejected when empty array is passed", () => {
    expect(promiseAny([])).rejects.toThrow(AggregateError);
  });

  test("Return a promise of first resolved promise", async () => {
    const result = await promiseAny([promise1, promise2, promise3]);
    expect(result).toBe("foo");
  });

  test("Rejected when all promises are rejected", () => {
    expect(promiseAny([promise3, promise4])).rejects.toThrow(AggregateError);
  });
});
