const { sockMerchant1, sockMerchant2 }  = require('../sockMerchant');

describe("Test sockMerchant.js", () => {

  test("sockMerchant1 can return correct pairs", () => {
    const testArr1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const testArr2 = [1,2,1,2,1,3,2];
    const testArr3 = [1,2,3,4,5,6];
    expect(sockMerchant1(testArr1)).toBe(3);
    expect(sockMerchant1(testArr2)).toBe(2);
    expect(sockMerchant1(testArr3)).toBe(0);
  });

  test("sockMerchant2 can return correct pairs", () => {
    const testArr1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const testArr2 = [1,2,1,2,1,3,2];
    const testArr3 = [1,2,3,4,5,6];
    expect(sockMerchant2(testArr1)).toBe(3);
    expect(sockMerchant2(testArr2)).toBe(2);
    expect(sockMerchant2(testArr3)).toBe(0);
  });
});