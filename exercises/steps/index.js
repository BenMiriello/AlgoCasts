// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    // if done
    if (n === row) {
        return;
    }
    // if end of row
    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1) 
    }
    // build stair
    stair += stair.length <= row ? '#' : ' '
    steps(n, row, stair)
}

module.exports = steps;

// // Solution 2
// function steps(n) {
//     // from 0 to n
//     for (let row = 0; row < n; row++) {
//         // create empty string for stair
//         let stair = ''
//         // if column <= row, add a '#', else add a ' '
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair)
//     }
// }


// // Solution 1
// function steps(n) {
//     // from 0 to n
//     for (let row = 0; row < n; row++) {
//         // create empty string for stair
//         let stair = ''
//         // add a space to stair n times
//         for (let column = 0; column < n; column++) {
//             stair += ' '
//         }
//         // replace chars with '#', starting at 0, row + 1 times
//         for (let index = 0; index <= row; index++) {
//             stair = stair.replace(stair[index], '#')
//         }
//         console.log(stair)
//     }
// }