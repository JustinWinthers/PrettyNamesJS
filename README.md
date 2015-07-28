## PrettyNamesJS - Convert object variable names to a readable format for reporting/UI presentation.

## The low down

PrettyNames.Js

## How to install

It's simple:


```
npm install PrettyNames
```

### How do I use it?

```js

 var prettyNames = require('PrettyNames')({camelCase:true});

 console.log (prettyNames('convertCamelCaseStringToAPrettyName'));

 console.log (prettyNames('convertCamel_CaseString!!ToA*PrettyName'));

```

Both of the above will produce the same results as special characters are removed:

```
 Convert camel case string to a pretty name
```

## Authors

**Justin Winthers**

+ https://github.com/JustinWinthers


## License

Copyright 2014 Digital Advisors, LLC

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0