const { solution } = require("../pyramid");

describe("Test pyramid.js", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("pyramid is a function", () => {
    expect(typeof solution).toEqual("function");
  });

  test("prints a pryamid for n = 2", () => {
    solution(2);
    expect(console.log.mock.calls[0][0]).toEqual(" # ");
    expect(console.log.mock.calls[1][0]).toEqual("###");
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test("prints a pryamid for n = 3", () => {
    solution(3);
    expect(console.log.mock.calls[0][0]).toEqual("  #  ");
    expect(console.log.mock.calls[1][0]).toEqual(" ### ");
    expect(console.log.mock.calls[2][0]).toEqual("#####");
    expect(console.log.mock.calls.length).toEqual(3);
  });

  test("prints a pryamid for n = 4", () => {
    solution(4);
    expect(console.log.mock.calls[0][0]).toEqual("   #   ");
    expect(console.log.mock.calls[1][0]).toEqual("  ###  ");
    expect(console.log.mock.calls[2][0]).toEqual(" ##### ");
    expect(console.log.mock.calls[3][0]).toEqual("#######");
    expect(console.log.mock.calls.length).toEqual(4);
  });
});
