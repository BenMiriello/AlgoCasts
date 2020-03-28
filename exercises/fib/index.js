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
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

module.exports = fib;


// function fib(n) {
//     if (n === 0) return 0
//     const runFib = (prevSum, sum, i) => {
//         const placeholder = sum
//         sum += prevSum
//         i++
//         if (i >= n) return sum
//         prevSum = placeholder
//         return runFib(prevSum, sum, i)
//     }
//     return runFib(0, 1, 1)
// }


// function fib(n) {
//     const result = []
//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1]
//         const b = result[i - 2]
//         result.push(a + b)
//     }
//     return result[n]
// }


// function fib(n) {
//     if (n === 0) return 0
//     let prevSum = 0
//     let sum = 1
//     let placeholder
//     for (i = 1; i < n; i++) {
//         placeholder = sum
//         sum += prevSum
//         prevSum = placeholder
//     }
//     return sum
// }