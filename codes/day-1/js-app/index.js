//string, number, boolean, object
/*
var a = 10.45
var b = 'joydip'
var c = true

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

var obj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    show: function () {
        // return `${this.id}, ${this.name},${this.salary}`
        return this.id
    }
}

//obj.location = 'bangalore'
obj['location'] = 'bangalore'
obj.sayHi = function () {
    return 'Hi ' + this.name + ' from ' + this.location
}
console.log(obj.name);
console.log(obj['salary']);
var info = obj.show();
console.log(info, typeof info);
console.log(obj.sayHi());

function add(a, b) {
    return a + b
}
console.log(add(12, 13))

var subtract = function (a, b) {
    return a - b
}
console.log(subtract(12, 3));

let val = 10
console.log(val); //10
for (let i = 0; i < 1; i++) {
    let val = 20
    console.log(val); //20
}
console.log(val);//10

val = 'siemens'
console.log(val);

const value = 100
//value = 200
console.log(value);
*/

class Person {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    show() {
        return `${this.id}, ${this.name},${this.salary}`
    }
}

const anilPerson = new Person(1, 'anil', 1000)

anilPerson.location = 'Bangalore'

console.log(anilPerson.id);
console.log(anilPerson['name']);
console.log(anilPerson.show());
console.log(anilPerson.location);


