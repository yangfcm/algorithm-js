// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// eg. reverseInt(521) = 125, reverseInt(-521) = -125, reverseInt(1200) = 21

function reverseInt(int) {
  try {
    if(!Number.isInteger(int)) {
      throw new Error('Integer required');
    }
    const reversed = int.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(int);
  } catch(e) {
    return console.log(e.message);
  }
}

module.exports = reverseInt;