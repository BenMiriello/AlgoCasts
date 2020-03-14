// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = []
    let index = 0
    while (index < array.length) {
        chunked.push(array.slice(index, index += size))
    }
    return chunked
}

module.exports = chunk;


// let parent = []
// let childIndex = 0
// let sizeCounter = 0
// for (let n of array) {
//     // on first iteration, create first child with first n
//     if (childIndex === 0  && sizeCounter === 0) {
//         parent[childIndex] = [n]
//     // if child array isn't yet full, keep adding
//     } else if (sizeCounter < size) {
//         parent[childIndex].push(n)
//     // if child array is full, 
//         // increment childIndex, 
//         // make a new child at that index, 
//         // and reset childCounter
//     } else {
//         childIndex++
//         parent[childIndex] = [n]
//         sizeCounter = 0
//     }
//     // always increment sizeCounter
//     sizeCounter++
// }
// return parent 


// let parent = []
// let childIndex = 0
// let sizeCounter = 0
// for (let n of array) {
//     if (sizeCounter < size) {
//         if (parent[childIndex]) {
//             parent[childIndex].push(n)
//         } else {
//             parent[childIndex] = [n]
//         }
//         sizeCounter++
//     } else {
//         childIndex++
//         parent[childIndex] = [n]
//         sizeCounter = 1
//     }
// }
// return parent