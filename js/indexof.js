/**
 *  indexOf - Implement array's built-in indexOf method
 */
function indexOf(array, el) {
	// let foundIndex = -1;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === el) {
			return i;
		}
	}
	return -1;
}

module.exports = indexOf;