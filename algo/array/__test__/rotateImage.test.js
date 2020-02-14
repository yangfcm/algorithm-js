const rotateImage = require("../rotateImage");

describe("Test rotateImage.js", () => {
  test("rotateImage function is defined", () => {
    expect(rotateImage).toBeDefined();
  });

  test("Function can rotate image(size = 3) correctly", () => {
    const image = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const rotated = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];
    expect(rotateImage(image)).toEqual(rotated);
  });

  test("Function can rotate image(size = 4) correctly", () => {
    const image = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16]
    ];
    const rotated = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11]
    ];
    expect(rotateImage(image)).toEqual(rotated);
  });

  test("Function can rotate image(size = 5) correctly", () => {
    const image = [
      [5, 1, 9, 11, 58],
      [2, 4, 8, 10, 32],
      [13, 3, 6, 7, 77],
      [15, 14, 12, 16, 99],
      [0, 1, 5, 7, 9]
    ];
    const rotated = [
      [0, 15, 13, 2, 5],
      [1, 14, 3, 4, 1],
      [5, 12, 6, 8, 9],
      [7, 16, 7, 10, 11],
      [9, 99, 77, 32, 58]
    ];
    expect(rotateImage(image)).toEqual(rotated);
  });
});
