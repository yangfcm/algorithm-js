const indexOf = require('../js/indexof');

describe("Test js/indexof.js", () => {
	test("should function is defined", () => {
		expect(indexOf).toBeDefined();
	});

	test("should find element at index of 0", () => {
		expect(indexOf([1, 2, 3], 1)).toBe(0);
	});

	test("should find element at index of >0", () => {
		expect(indexOf([1, 2, 3, 4], 3)).toBe(2);
	});

	test("should not find element and return -1", () => {
		expect(indexOf([1, 2, 3, 4], '3')).toBe(-1);
	});

});