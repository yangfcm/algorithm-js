const { solution } = require("../steps");

describe("Test steps.js", () => {
  test("steps function defined", () => {
    expect(solution).toBeDefined();
  });

  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("solution called with n = 1", () => {
    solution(1);
    expect(console.log.mock.calls[0][0]).toEqual("#");
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("solution called with n = 2", () => {
    solution(2);
    expect(console.log.mock.calls[0][0]).toEqual("# ");
    expect(console.log.mock.calls[1][0]).toEqual("##");
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test("solution called with n = 3", () => {
    solution(3);
    expect(console.log.mock.calls[0][0]).toEqual("#  ");
    expect(console.log.mock.calls[1][0]).toEqual("## ");
    expect(console.log.mock.calls[2][0]).toEqual("###");
    expect(console.log.mock.calls.length).toEqual(3);
  });
});
