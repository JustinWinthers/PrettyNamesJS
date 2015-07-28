var prettyNames = require ('./PrettyNames.js')({camelCase:true});


console.log (prettyNames('convertThis     CamelCase_T&*oTrue'));

console.log ('Pass test 1:', prettyNames('convertThis     CamelCase_T&*oTrue') === 'Convert this camel case to true')