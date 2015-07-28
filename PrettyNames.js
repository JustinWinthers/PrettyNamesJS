/*


 var prettyNames = require('PrettyNames')({camelCase:true});

 console.log (prettyNames('convertCamelCaseStringToAPrettyName'));


 */


(function () {

    // support global, AMD, and CommonJS

    "use strict";

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return PrettyNames;
        });
    }
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = PrettyNames;

    }
    else {
        this.PrettyNames = PrettyNames;
    }

    // accept configuration object.  It's not really being used yet.
    // todo: add additional configuration options

    function PrettyNames(config){


        function fromCamelCase(name) {


            if (typeof name === 'object'){

                var names = Object.keys(name);

                var i=0;

                for (;i<names.length;i++){

                    names[i] = convertName(names[i]);

                }

                return names;

            } else {

                return convertName(name)

            }

            function convertName(name) {

                var result = [], firstTime = true;

                name = name.replace(/[^a-zA-Z0-9]/g, '');

                Array.prototype.forEach.call(name, function (char) {

                    if (firstTime) {

                        result.push(char[0].toUpperCase());
                        firstTime = !firstTime;

                    } else {

                        if (char === char.toUpperCase()) result.push(' ');
                        result.push(char.toLowerCase());
                    }

                });

                return result.join("");

            }

        };


        if (config.camelCase) {
            return fromCamelCase;
        } else {
            return fromCamelCase;
        }

    }

}.call(this));



