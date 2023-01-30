const repeatString = function(word, count) {
    if (count < 0) return 'ERROR';
    let repeatedString = '';
    for (let i = 0; i < count; i++) {
        repeatedString += word;
    }
    return repeatedString;
};

// Solution
// const repeatString = function(word, times) {
//    if (times < 0) return 'ERROR';
//    let string = '';
//    for (let i = 0; i < times; i++) {
//        string += word;
//   }
//    return string;
// };

// Do not edit below this line
module.exports = repeatString;