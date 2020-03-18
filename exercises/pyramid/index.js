// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######' 

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row ++) {
        let level = ''

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }

        console.log(level)
    }
}

module.exports = pyramid;

// function pyramid(n) {
//     let rowLength = n * 2 - 1
//     let emptyLevel = []
//     for (let i = 0; i < rowLength; i++) {
//         emptyLevel.push(' ')
//     }
//     for (let row = 0; row < n; row++) {
//         let level = emptyLevel
//         for (let width = ((row + 1) * 2) - 1, cell = n - row; cell < width - row; cell++) {
//             level[cell] = '#'
//         }
//         if (level.includes('#')) {
//             console.log(level.join(''))
//         }
//     }
// }