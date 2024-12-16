var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 10;
//a = ''
function add(a, b) {
    return a + b;
}
var Person = /** @class */ (function () {
    function Person(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Person.prototype.show = function () {
        return "Name=".concat(this.name, ",Id=").concat(this.id, ",Salary=").concat(this.salary);
    };
    return Person;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(id, name, salary, subject) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.subject = subject;
        return _this;
    }
    Trainer.prototype.show = function () {
        return "".concat(_super.prototype.show.call(this), ", Subject=").concat(this.subject);
    };
    return Trainer;
}(Person));
var joyTrainer = new Trainer(1, 'joydip', 1000, 'TypeScript');
console.log(joyTrainer.show());
var people = [joyTrainer];
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var element = people_1[_i];
    console.log(element.name);
}
var numbers = [1, 2, 3, 4, 5];
