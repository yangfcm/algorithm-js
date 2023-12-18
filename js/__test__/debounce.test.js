const debounce = require("../debounce");

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

  test("Debounced function should be called after a certain amount of time and only be called once.", () => {
    const debounced = debounce(fn, 300);
    debounced();
    debounced();
    debounced();

    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(299);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("Callback can access 'this'.", () => {
    const obj = {
      val: 1,
      increment: debounce(function (adder) {
        this.val += adder;
      }, 10),
    };

    expect(obj.val).toBe(1);
    obj.increment(3);
    expect(obj.val).toBe(1);
    jest.advanceTimersByTime(10);
    expect(obj.val).toBe(4);
  });
});
