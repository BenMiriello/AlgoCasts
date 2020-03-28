// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n === 0) return 0
    let prevSum = 0
    let sum = 1
    let placeholder
    for (i = 1; i < n; i++) {
        placeholder = sum
        sum += prevSum
        prevSum = placeholder
    }
    return sum
}

module.exports = fib;
