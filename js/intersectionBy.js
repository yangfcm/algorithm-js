/**
 * @name intersectionBy
 * @description This method is like _.intersection except that it accepts iteratee
 * which is invoked for each element of each arrays to generate the criterion by which they’re compared.
 * The order and references of result values are determined by the first array. The iteratee is invoked with one argument: (value).
 * @example 
 *  const array1 = [{ x: 1 }, { x: 2 }];
    const array2 = [{ x: 2 }, { x: 3 }];
    const array3 = [{ x: 4 }, { x: 2 }];
 * intersectionBy(array1, array2, array3, (item) => item.x) -> [{x: 2}]
 * @param  {[arrays], function} args a list of arguments:
 * the last one is the iteratee invoked per element, others are the arrays to inspect.
 * @returns {array}
 */
function intersectionBy(...args) {
  // Extract the iteratee function from the last argument.
  const iteratee = args.pop();

  // Use the first array as the base for intersection
  const baseArray = args.shift() || [];

  // Map elements of the base array using the iteratee function
  const baseArrayMapped = baseArray.map(iteratee);

  // Filter elements that exist in all arrays.
  return baseArray.filter((value, index) => {
    const baseMappedValue = baseArrayMapped[index];
    return args.every((arr) =>
      arr.some((element) => iteratee(element) === baseMappedValue)
    );
  });
}

module.exports = intersectionBy;
