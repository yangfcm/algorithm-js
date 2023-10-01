const { debounce } = require("../debounce");

jest.useFakeTimers();
describe("Test debounce.js", () => {
  let fn;

  beforeEach(() => {
    jest.useFakeTimers();
    fn = jest.fn();
  });

  afterEach(() => {
    fn = null;
  });

  test("Debounced function", () => {
    const debounced = debounce(fn);
    debounced();

    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(1);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("Debounced function should be called after a certain amount of time.", () => {
    const debounced = debounce(fn, 300);
    debounced();

    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(299);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
