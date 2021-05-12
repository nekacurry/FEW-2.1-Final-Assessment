const data = require('./data.json');


// Helpers

// Capitalize first letter of string
function capitalize(str: string) {
  if (str != ''){
    var first: string = str[0].toUpperCase()
    var rest: string = str.slice(1)
  } else {
    return ''
  }
  return first + rest
}

// Capitalize first letter of each word
function capitalizeWords(str: string) {
  const words: string[] = str.split(' ')
  const upperWords: string[] = words.map( word => capitalize(word) )
  return upperWords.join(' ')
}


// Challenges

function printData() {
  console.log(`${capitalizeWords(data[0].first_name)} ${capitalizeWords(data[0].last_name)}`)
}

printData()