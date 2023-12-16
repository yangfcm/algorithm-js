const promiseAllSettled = require("../promiseAllSettled");

describe("Test promiseAllSettled.js", () => {
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

  test("Return empty array when there's no promise passed", async () => {
    const result = await promiseAllSettled([]);
    expect(result).toEqual([]);
  });

  test("Test with non-promises", async () => {
    const result = await promiseAllSettled([1, 2, 3]);
    expect(result).toEqual([
      {
        status: "fulfilled",
        value: 1,
      },
      {
        status: "fulfilled",
        value: 2,
      },
      {
        status: "fulfilled",
        value: 3,
      },
    ]);
  });

  test("Should resolve promises correctly", async () => {
    const result = await promiseAllSettled([
      promise1,
      promise2,
      promise3,
      promise4,
    ]);
    expect(result).toEqual([
      {
        status: "fulfilled",
        value: 3,
      },
      {
        status: "fulfilled",
        value: 42,
      },
      {
        status: "fulfilled",
        value: "foo",
      },
      {
        status: "rejected",
        reason: "Error",
      },
    ]);
  });
});
