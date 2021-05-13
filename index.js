"use strict";
exports.__esModule = true;
var anneka_string_lib_1 = require("anneka-string-lib");
var strLib = require('anneka-string-lib');
var D = require('neka-date-lib');
var data = require('./data.json');
// Challenge Functions
function formatPhone(num) {
    if (anneka_string_lib_1.isEmpty(num) == true) {
        return 'No number on file';
    }
    var areaCode = num.slice(0, 3);
    var firstThree = num.slice(3, 6);
    var finalFour = num.slice(6);
    return "(" + areaCode + ") " + firstThree + "-" + finalFour;
}
// Challenge Outputs
function Data() {
    console.log("---------- Purchase Info ----------");
    // Challenge 1
    console.log(strLib.capitalizeWords(data[0].first_name) + " " + strLib.capitalizeWords(data[0].last_name));
    // Car Make/Model
    console.log(strLib.capitalizeWords(data[0].make) + " " + strLib.capitalizeWords(data[0].model));
    // Challenge 2
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var purchaseDate = new Date(data[0].purchased);
    console.log("Purchased: " + months[purchaseDate.getMonth()] + " " + purchaseDate.getDate() + ", " + purchaseDate.getFullYear());
    // Challenge 3
    var lastPayment = new D(data[0].lastpayment);
    console.log("Last Payment: " + lastPayment.when());
    // Challenge 4
    console.log("Phone Number: " + formatPhone(data[0].phone));
    // City
    console.log("City: " + strLib.capitalizeWords(data[0].city));
}
Data();
module.exports = { formatPhone: formatPhone };
