// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // return str === str.split('').reverse().join('')

    // let reversed = ''
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed === str

    // newArr = []
    // for (let a = 0, x = (str.length - 1); x >= 0; a++, x--){
    //     newArr[a] = str[x]
    // }
    // return str === newArr.join('')

    return str.split('').every((char, i) => char === str[str.length - 1 - i])

}

module.exports = palindrome;
