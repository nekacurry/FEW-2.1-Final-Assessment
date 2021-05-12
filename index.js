var strLib = require('anneka-string-lib');
var data = require('./data.json');
// Challenges
function printData() {
    console.log(strLib.capitalizeWords(data[0].first_name) + " " + strLib.capitalizeWords(data[0].last_name));
}
printData();
