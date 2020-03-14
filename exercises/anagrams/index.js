// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const arrange = (str) => {
    return str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('')
}

function anagrams(stringA, stringB) {
    return arrange(stringA) === arrange(stringB)
}

module.exports = anagrams;


// arrayA = stringA.toLowerCase().replace(/[^\w]/g, '').split('').sort()
// arrayB = stringB.toLowerCase().replace(/[^\w]/g, '').split('').sort()
// for (let i = 0; i < arrayA.length && arrayB.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//         return false
//     }
// }
// return true



// const aCharMap = buildCharMap(stringA)
// const bCharMap = buildCharMap(stringB)

// if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
// }

// for (let char in aCharMap) {
//     if (aCharMap[char ] !== bCharMap[char]) {
//         return false
//     }
// }

// return true
// }

// function buildCharMap(str) {
// const charMap = {}
// for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
// }
// return charMap



    // let arrayA = []
    // stringA.toLowerCase().split('').forEach(char => {
    //     if (!(char === /^[.,:;!? ]/)) {
    //         arrayA.push(char)
    //     }
    // })
    // let arrayB = []
    // stringB.toLowerCase().split('').forEach(char => {
    //     if (!(char === /^[.,:;!? ]/)) {
    //         arrayB.push(char)
    //     }
    // })

    // let result = true
    // arrayA = arrayA.sort()
    // arrayB = arrayB.sort()
    // for (let i = 0; i < arrayA.length && arrayB.length; i++) {
    //     if (arrayA[i] != arrayB[i]) {
    //         result = false
    //     }
    // }
    // return result