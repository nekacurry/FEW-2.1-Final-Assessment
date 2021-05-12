var data = require('./data.json');
// Helpers
// Capitalize first letter of string
function capitalize(str) {
    if (str != '') {
        var first = str[0].toUpperCase();
        var rest = str.slice(1);
    }
    else {
        return '';
    }
    return first + rest;
}
// Capitalize first letter of each word
function capitalizeWords(str) {
    var words = str.split(' ');
    var upperWords = words.map(function (word) { return capitalize(word); });
    return upperWords.join(' ');
}
// Challenges
function printData() {
    console.log(capitalizeWords(data[0].first_name) + " " + capitalizeWords(data[0].last_name));
}
printData();
