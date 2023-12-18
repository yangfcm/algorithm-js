/**
 * @name intersectionWith
 * @description This method is like _.intersection except that it accepts a comparator
 * which is invoked to compare elements of arrays. 
 * The order and references of result values are determined by the first array. 
 * The comparator is invoked with two arguments: (arrVal, othVal).
 * @example 
 *  const array1 = [{ x: 1 }, { x: 2 }];
    const array2 = [{ x: 2 }, { x: 3 }];
    const array3 = [{ x: 4 }, { x: 2 }];
 * intersectionWith(array1, array2, array3, (a, b) => a.x === b.x) -> [{x: 2}]
 * @param  {[arrays], function} args a list of arguments:
 * the last one is the comparator, others are the arrays to inspect.
 * @returns {array}
 */
function intersectionWith(...args) {
  // Extract the comparator function from the last argument.
  const comparator = args.pop();

  // Use the first array as the base for intersection
  const baseArray = args.shift() || [];

  // Filter the elements that exist in all arrays using the comparator function.
  return baseArray.filter((value) =>
    args.every((arr) => arr.some((element) => comparator(element, value)))
  );
}

module.exports = intersectionWith;
