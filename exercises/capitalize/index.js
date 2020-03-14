// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

module.exports = capitalize;
 

// const capitalize = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')


// function capitalize(str) {
//     let result = [str[0].toUpperCase()]
//     for (i = 1; i < str.length; i++) {
//         if (str[i-1] === ' ') {
//             result += str[i].toUpperCase()
//         } else {
//             result += str[i]
//         }
//     }
//     return result
// }


// function capitalize(str) {
//     const words = []
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return words.join(' ')
// }


// const capitalize = (str) => (
//     str.split(' ').map(word => 
//         word[0].toUpperCase() + (word.length > 1 ? word.slice(1) : "")
//     ).join(' ')
// )


// return str.split(' ').map(word => 
//     word[0].toUpperCase() + (
//         word.length > 1 ? word.substring(1, word.length) : ""
//     )
// ).join(' ')

