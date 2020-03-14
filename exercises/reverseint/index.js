// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    // // doesn't work: 
    // let arr = n.toString(10).split('')
    // if (n < 0) {
    //     return parseInt(arr.shift().reverse().join('') * -1)
    // }
    // else {
    //     return parseInt(arr.reverse().join(''))
    // }
    
    // let mod
    // n < 0 ? mod = -1 : mod = 1
    // return mod*parseInt(n.toString(10).split('').reverse().join(''))

    let reversed = n
        .toString(10)
        .split('')
        .reverse()
        .join('')

    return Math.sign(n)*parseInt(reversed)

}

module.exports = reverseInt;
