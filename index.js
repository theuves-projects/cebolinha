'use strict';

module.exports = function (str) {

    if (typeof str === 'string') {
        str = str.replace(/r(?=(l|L))/g, 'u').replace(/R(?=(l|L))/g, 'U');
        str = str.replace(/r+(?!\b)/g, 'l').replace(/R+(?!\b)/g, 'L');

        str = str.replace(/([^aeiouAEIOUà-üÀ-Ü]r\b)/g, function ($1) {
            return $1.replace(/.$/, 'l');
        });

        str = str.replace(/([^aeiouAEIOUà-üÀ-Ü]R\b)/g, function ($1) {
            return $1.replace(/.$/, 'L');
        });

        return str;
    }
};