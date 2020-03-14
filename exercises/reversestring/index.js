// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('')    
}

module.exports = reverse;    










































    // let new_arr = []
    // for (i = 0; i < str.length; i++) {
    //     console.log('str: ', str)
    //     console.log('i: ', i, ' , str.length - i - 1: ', str.length-i-1)
    //     new_arr[i] = str[str.length - i - 1]
    // }
    // return new_arr.join('')

    // let new_arr = []
    // for (x = 0, i = str.length - 1; i >= 0; x++, i--) {
    //     new_arr[x] = (str[i]);
    // }
    // return new_arr.join('')

    // let reversed = ''
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed

    // return str.split('').reduce((rev, char) => char + rev, '')