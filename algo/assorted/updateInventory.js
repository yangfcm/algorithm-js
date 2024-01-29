/**
 * @name updateInventory
 * @description Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 * @example arr1 = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
    ]
    arr2 = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"],
    ] -> 
    [
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"], 
      [3, "Half-Eaten Apple"], 
      [5, "Microphone"], 
      [7, "Toothpaste"],
    ]
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array}
 * @solution Use Map, the solution is straightforward.
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
 */
function solution(arr1, arr2) {
  const updatedArr = [...arr1, ...arr2];
  const updatedInventory = {};
  const updatedInventoryArr = [];
  for (let [quantity, item] of updatedArr) {
    updatedInventory[item] = (updatedInventory?.[item] || 0) + quantity;
  }
  for (let [item, quantity] of Object.entries(updatedInventory)) {
    updatedInventoryArr.push([quantity, item]);
  }
  updatedInventoryArr.sort((a, b) => (a[1] < b[1] ? -1 : 1));
  return updatedInventoryArr.sort((a, b) => a[0] > b[0]);
}
