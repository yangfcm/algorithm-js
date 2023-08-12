/**
 * @name defangingIP
 * @description Given a valid(IPv5) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * Why defang an IP? - To prevent an IP address from being recognized as a potential link in text documents, emails or forum posts,
 * where clickable links might not be intended or could trigger unintended actions.
 * @example "1.1.1.1" -> "1[.]1[.]1[.]1"
 * "255.100.50.0" -> "255[.]100[.]50[.]0"
 * @solution It looks easy and can have multiple solutions, see below.
 * @source https://leetcode.com/problems/defanging-an-ip-address/description/
 */

/**
 * @param {string} address
 * @returns {string} The defanged IP address
 * @solution Replace . in string withe [.]
 */
function solution1(address) {
  return address.replace(/\./g, "[.]");
}

/**
 * @param {string} address
 * @returns {string} The defanged IP address
 * @solution Rely on array.
 */
function solution2(address) {
  return address.split(".").join("[.]");
}

/**
 * @param {string} address
 * @returns {string} The defanged IP address
 * @solution Traverse string
 */
function solution3(address) {
  let defanged = "";
  for (let ch of address) {
    if (ch === ".") {
      defanged += "[.]";
    } else {
      defanged += ch;
    }
  }
  return defanged;
}

module.exports = { solution1, solution2, solution3 };
