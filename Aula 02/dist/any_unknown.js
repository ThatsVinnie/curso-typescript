"use strict";
var add = function (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return null;
};
console.log(add(3, 5));
