var strLib = require('anneka-string-lib');
var D = require('neka-date-lib');
var data = require('./data.json');
function Data() {
    // Challenge 1
    console.log(strLib.capitalizeWords(data[0].first_name) + " " + strLib.capitalizeWords(data[0].last_name));
    // Challenge 2
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var purchaseDate = new Date(data[0].purchased);
    console.log("Purchased: " + months[purchaseDate.getMonth()] + " " + purchaseDate.getDate() + ", " + purchaseDate.getFullYear());
    // Challenge 3
    var lastPayment = new D(data[0].lastpayment);
    console.log("Last Payment: " + lastPayment.when());
}
Data();
