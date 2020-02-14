/** Given two arrays, write a function to compute their intersection.
 * Each element in the result should appear as many times as it shows in both arrays.
 * The result can be in any order.
 * e.g. Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
				Output: [4,9]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  let smaller;
  let bigger;
  if (nums1.length < nums2.length) {
    // Compare the size of two arrays, and put the smaller array in smaller,
    // and bigger array in bigger
    smaller = nums1;
    bigger = nums2;
  } else {
    smaller = nums2;
    bigger = nums1;
  }
  const interscetArr = [];
  for (let i = 0; i < smaller.length; i++) {
    // Iterate smaller array, if the element in smaller array can be found in bigger array
    // It is one element in intersection and meanwhile remove the element from bigger array to avoid duplication
    let foundIndex = bigger.indexOf(smaller[i]);
    if (foundIndex >= 0) {
      interscetArr.push(bigger[foundIndex]);
      bigger.splice(foundIndex, 1);
    }
  }
  return interscetArr;
}

module.exports = intersect;
