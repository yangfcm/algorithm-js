/**
 * @name tripleSum
 * @description Given 3 arrays of a, b, c of different sizes, find the number of distinct triplets (p, q, r),
 * where p is from a, q from b, r from c, satisfying the criteria: p <= q and q >= r.
 * @example a = [3, 5, 7], b = [3, 6], c = [4, 6, 9] -> 4.
 * There are 4 such distinct triplets. They are: (3, 6, 4), (3, 6, 6), (5, 6, 4), (5, 6, 6).
 * @solution Iterate through array b. For each element in array b (bn),
 * find out how many numbers in array a smaller than or equal to bn (use variable ai to save the number)
 * and how many numbers in array c smaller than or equal to bn (use variable ci to save the number).
 * So for this particular element - bn, there are ai * ci such triples. Then sum all the counts for each element in array b.
 * While doing iteration, you should not recount the repetitive triplets.
 * We need to do some optimisation before iteration:
 * 1 - Remove duplicate elements from array a, b and c.
 * 2 - Sort the array.
 * By doing so:
 * 1 - we can guarantee each combination is a unique one.
 * 2 - Faster speed.
 * @param {array} a
 * @param {array} b
 * @param {array} c
 * @returns {number} The number of triplets defined in description.
 * @source https://www.hackerrank.com/challenges/triple-sum
 */
function solution(a, b, c) {
  a = Array.from(new Set(a));
  b = Array.from(new Set(b));
  c = Array.from(new Set(c)); // Remove duplicate elements from the arrays.
  a.sort((x, y) => (x < y ? 1 : -1));
  b.sort((x, y) => (x < y ? 1 : -1));
  c.sort((x, y) => (x < y ? 1 : -1)); // Sort the arrays.

  let count = 0;
  let ai = 0;
  let ci = 0;
  for (let bn of b) {
    while (ai < a.length) {
      if (a[ai] <= bn) {
        break;
      }
      ai++;
    }
    while (ci < c.length) {
      if (c[ci] <= bn) {
        break;
      }
      ci++;
    }
    let aCount = a.length - ai;
    let cCount = c.length - ci;
    count += aCount * cCount;
  }

  return count;
}

module.exports = { solution };
