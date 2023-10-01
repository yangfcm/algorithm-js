const { debounce } = require("../debounce");

jest.useFakeTimers();
describe("Test debounce.js", () => {
  const fn = jest.fn();

  test("Debounced function should be called after a certain amount of time.", () => {
    const debounced = debounce(fn, 300);
    debounced();

    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(200);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
