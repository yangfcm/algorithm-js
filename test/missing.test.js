const missing = require('../algo/missing');

describe("Test algo/missing.js", () => {
	test("should function is defined", () => {
		expect(missing).toBeDefined();
	});

	test("empty array should return undefined", () => {
		expect(missing([])).toBeUndefined();
	});

	test("should have missing number", () => {
		expect(missing([5, 1, 2, 4])).toBe(3);
	});

	test("should not have missing number", () => {
		expect(missing([3, 1, 4, 2])).toBeUndefined();
	});
})