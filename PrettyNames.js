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

    function PrettyNames(config){


        function fromCamelCase (name){

            var result = [], firstTime=true;

            name = name.replace(/[^a-zA-Z0-9]/g,'');

            Array.prototype.forEach.call(name, function(char){

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

        if (config.camelCase) {
            return fromCamelCase;
        } else {
            return fromCamelCase;
        }

    }

}.call(this));



