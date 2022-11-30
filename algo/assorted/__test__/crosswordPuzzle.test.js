const { solution } = require("../crosswordPuzzle");

describe("Test crosswordPuzzle.js", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("Test case one", () => {
    const words = ["POLAND", "LHASA", "SPAIN", "INDIA"];
    const crossword = [
      "++++++++++",
      "+------+++",
      "+++-++++++",
      "+++-++++++",
      "+++-----++",
      "+++-++-+++",
      "++++++-+++",
      "++++++-+++",
      "++++++-+++",
      "++++++++++",
    ];
    solution(crossword, words);
    expect(console.log.mock.calls[0][0]).toBe("++++++++++");
    expect(console.log.mock.calls[1][0]).toBe("+POLAND+++");
    expect(console.log.mock.calls[2][0]).toBe("+++H++++++");
    expect(console.log.mock.calls[3][0]).toBe("+++A++++++");
    expect(console.log.mock.calls[4][0]).toBe("+++SPAIN++");
    expect(console.log.mock.calls[5][0]).toBe("+++A++N+++");
    expect(console.log.mock.calls[6][0]).toBe("++++++D+++");
    expect(console.log.mock.calls[7][0]).toBe("++++++I+++");
    expect(console.log.mock.calls[8][0]).toBe("++++++A+++");
    expect(console.log.mock.calls[9][0]).toBe("++++++++++");
  });

  test("Test case two", () => {
    const words = ["AGRA", "NORWAY", "ENGLAND", "GWALIOR"];
    const crossword = [
      "+-++++++++",
      "+-++++++++",
      "+-------++",
      "+-++++++++",
      "+-++++++++",
      "+------+++",
      "+-+++-++++",
      "+++++-++++",
      "+++++-++++",
      "++++++++++",
    ];
    solution(crossword, words);
    expect(console.log.mock.calls[0][0]).toBe("+E++++++++");
    expect(console.log.mock.calls[1][0]).toBe("+N++++++++");
    expect(console.log.mock.calls[2][0]).toBe("+GWALIOR++");
    expect(console.log.mock.calls[3][0]).toBe("+L++++++++");
    expect(console.log.mock.calls[4][0]).toBe("+A++++++++");
    expect(console.log.mock.calls[5][0]).toBe("+NORWAY+++");
    expect(console.log.mock.calls[6][0]).toBe("+D+++G++++");
    expect(console.log.mock.calls[7][0]).toBe("+++++R++++");
    expect(console.log.mock.calls[8][0]).toBe("+++++A++++");
    expect(console.log.mock.calls[9][0]).toBe("++++++++++");
  });

  test("Test case three", () => {
    const words = ["ICELAND", "MEXICO", "PANAMA", "ALMATY"];
    const crossword = [
      "++++++-+++",
      "++------++",
      "++++++-+++",
      "++++++-+++",
      "+++------+",
      "++++++-+-+",
      "++++++-+-+",
      "++++++++-+",
      "++++++++-+",
      "++++++++-+",
    ];
    solution(crossword, words);
    expect(console.log.mock.calls[0][0]).toBe("++++++I+++");
    expect(console.log.mock.calls[1][0]).toBe("++MEXICO++");
    expect(console.log.mock.calls[2][0]).toBe("++++++E+++");
    expect(console.log.mock.calls[3][0]).toBe("++++++L+++");
    expect(console.log.mock.calls[4][0]).toBe("+++PANAMA+");
    expect(console.log.mock.calls[5][0]).toBe("++++++N+L+");
    expect(console.log.mock.calls[6][0]).toBe("++++++D+M+");
    expect(console.log.mock.calls[7][0]).toBe("++++++++A+");
    expect(console.log.mock.calls[8][0]).toBe("++++++++T+");
    expect(console.log.mock.calls[9][0]).toBe("++++++++Y+");
  });
});
