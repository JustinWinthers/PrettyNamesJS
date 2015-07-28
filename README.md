## PrettyNamesJS - Convert object variable names to a readable format for reporting/UI presentation.

## The low down

PrettyNames.Js

## How to install

It's simple:


```
npm install prettynames
```

### How do I use it?

```js

 var prettyNames = require('PrettyNames')({camelCase:true});

 console.log ( prettyNames('convertCamelCaseStringToAPrettyName') );

 console.log ( prettyNames('convertCamel_CaseString!!ToA*PrettyName') );

```

Both of the above will produce the same results as special characters are removed:

```
 Convert camel case string to a pretty name
```

You can also pass in an object and you will return an array or pretty names for the enumerable properties
in the object.  This is best or use in dynamic reporting like building a csv:

```js

var obj = {
    someVariableName:'',
    someOtherObjectName:'',
    someEnumerableThing:'',
    someFuncName:''
};

console.log ( prettyNames(obj) );

```

will return:

```js

[ 'Some variable name',
  'Some other object name',
  'Some enumerable thing',
  'Some func name' ]

```

likewise, if building a csv then you would write:

```js

console.log ( prettyNames(obj).join(',') );


```

## Authors

**Justin Winthers**

+ https://github.com/JustinWinthers


## License

Copyright 2014 Digital Advisors, LLC

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0