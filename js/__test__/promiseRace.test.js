const promiseRace = require("../promiseRace");

describe("Test promiseRace.js", () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1");
    }, 800);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, 500);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3");
    }, 50);
  });
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error-4");
    }, 100);
  });
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error-5");
    }, 200);
  });

  test("Return the fastest settled promise", async () => {
    const res1 = await promiseRace([promise1, promise2, promise3, promise4]);
    expect(res1).toBe("3");

    expect(
      promiseRace([promise1, promise2, promise4, promise5])
    ).rejects.toMatch("error-4");
  });
});
