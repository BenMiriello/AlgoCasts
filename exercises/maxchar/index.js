// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {}
    for (let char of str) {
        obj[char] = obj[char] + 1 || 1
    }
    return Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)
}

module.exports = maxChar;


    // const charMap = {}
    // let max = 0
    // let maxChar = ''
    // for (let char of str) {
    //     charMap[char] = charMap[char] + 1 || 1
    // }
    // for (let char in charMap) {
    //     if (charMap[char] > max) {
    //         max = charMap[char];
    //         maxChar = char
    //     }
    // }
    // return maxChar


    // let arr = str.split('')
    // for (i=0; i < arr.length; i++){
    //     if (obj[arr[i]]){
    //         obj[arr[i]]++
    //     } else {
    //         obj[arr[i]] = 1
    //     }
    // }

