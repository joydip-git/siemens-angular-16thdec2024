"use strict";
var add = function (a, b) { return a + b; };
var divide = function (a, b) {
    //const p = new Promise<void>(
    var p = new Promise(function (resolveFn, rejectFn) {
        var divRes = a / b;
        if (divRes === Infinity) {
            var error = new Error('divisor is be zero');
            //update promise's state to 'rejected'
            rejectFn(error);
        }
        else {
            //return divRes
            //update promise's state to 'resolved/fulfilled'
            //console.log(divRes)
            //resolveFn(divRes)
            resolveFn(divRes);
        }
    });
    return p;
};
var divPromise = divide(12, 3);
// divPromise
//     .then(
//         //executed when Promise is "fulfilled/resolved"
//         (x) => { console.log(x) },
//         //executed when Promise is "rejected"
//         (e) => { console.log(e) }
//     )
divPromise
    .catch(
// executed when Promise is "rejected"
function (e) { console.log(e); });
var addRes = add(12, 3);
console.log(addRes);
