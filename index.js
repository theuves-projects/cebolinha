'use strict';

module.exports = function (str) {

    if (typeof str === 'string') {

        return str
            .replace(/r(?=(l|L))/g, 'u').replace(/R(?=(l|L))/g, 'U')
            .replace(/r+(?!\b)/g, 'l').replace(/R+(?!\b)/g, 'L')

            .replace(/([^aeiouAEIOUà-üÀ-Ü]r\b)/g, function (xr) {
                return xr.replace(/.$/, 'l');
            })

            .replace(/([^aeiouAEIOUà-üÀ-Ü]R\b)/g, function (xr) {
                return xr.replace(/.$/, 'L');
            });
    }
};
