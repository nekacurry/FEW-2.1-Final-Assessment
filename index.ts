const strLib = require('anneka-string-lib');
const D = require('neka-date-lib')
const data = require('./data.json');


function Data() {
  // Challenge 1
  console.log(`${strLib.capitalizeWords(data[0].first_name)} ${strLib.capitalizeWords(data[0].last_name)}`)

  // Challenge 2
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 
  const purchaseDate = new Date(data[0].purchased)
  console.log(`Purchased: ${months[purchaseDate.getMonth()]} ${purchaseDate.getDate()}, ${purchaseDate.getFullYear()}`)

  // Challenge 3
  const lastPayment = new D(data[0].lastpayment)
  console.log(`Last Payment: ${lastPayment.when()}`)

  // Challenge 4


}

Data()