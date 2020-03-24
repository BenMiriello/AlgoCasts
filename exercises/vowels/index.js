// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    
};

module.exports = vowels;

// function vowels(str) {
//     const array = str.toLowerCase().split('')
//     const vowels = ['a','e','i','o','u']
//     let n = 0
//     for (char = 0; char < array.length; char++) {
//         for (vowel = 0; vowel < vowels.length; vowel++) {
//             if (array[char] == vowels[vowel]) {
//                 n += 1;
//             };
//         };
//     };
//     return n;
// };