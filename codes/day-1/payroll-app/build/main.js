"use strict";
function filterValues(input, fnRef) {
    var result = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var element = input_1[_i];
        //if (element % 2 === 0)
        var status_1 = fnRef(element);
        if (status_1)
            result.push(element);
    }
    return result;
}
//source of data
var numbers = [1, 2, 3, 4, 5, 6];
//logic to apply on every element in that array
var isOdd = function (num) {
    return num > 4;
};
//get the array filtered
var output = filterValues(numbers, isOdd);
//display the filtered elements
for (var _i = 0, output_1 = output; _i < output_1.length; _i++) {
    var element = output_1[_i];
    console.log(element);
}
var names = ['anil', 'sunil', 'joydip'];
names
    .filter(function (name) { return name.includes('n'); })
    .sort(function (a, b) { return b.localeCompare(a); })
    .forEach(function (name) { return console.log(name); });
/*
const namesWithN = filterValues<string>(
    names,
    (name: string) => name.includes('n')
)
namesWithN
    .sort(
        (a: string, b: string) => a.localeCompare(b)
    )
    .forEach((name: string) => console.log(name))
*/
//callback
function add(a, b) {
    return a + b;
}
//delegate number fnType(a: number, b: number);
function invoke(fnRef, x, y) {
    console.log(fnRef(x, y));
}
invoke(add, 12, 13);
function accept(value) {
    return 'your value is ' + value;
}
var anilEmp = {
    id: 1,
    name: 'anil',
    salary: 1000
};
