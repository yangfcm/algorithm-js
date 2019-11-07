function reduce(array, reducerFn, initialValue) {
	let accumulator;
	for (let i = 0; i < array.length; i++) {
		let currentValue = array[i];
		if (i === 0) {
			accumulator = initialValue || array[0];
		} else {
			accumulator = reducerFn(accumulator, currentValue);
		}
	}
	return accumulator;
}

module.exports = reduce;