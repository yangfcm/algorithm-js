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
  const interscetArr = [];
  for (let i = 0; i < nums1.length; i++) {
    // Iterate one of the array, if the element in the array can be found in the other array
    // It is exactly the element in intersection and meanwhile remove the element from the other array to avoid futher duplication
    let foundIndex = nums2.indexOf(nums1[i]);
    if (foundIndex >= 0) {
      interscetArr.push(nums2[foundIndex]);
      nums2.splice(foundIndex, 1);
    }
  }
  return interscetArr;
}

module.exports = intersect;
