var prettyNames = require ('./PrettyNames.js')({camelCase:true});


console.log ('Pass string test:', prettyNames('convertThis     CamelCase_T&*oTrue') === 'Convert this camel case to true');


var obj = {
    someVariableName:'',
    someOtherObjectName:'',
    someEnumerableThing:'',
    someFuncName:''
};

console.log ('Pass object test:', prettyNames(obj).join(',') === 'Some variable name,Some other object name,Some enumerable thing,Some func name');

