"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, basicPay, daPay, hraPay) {
        this.id = id;
        this.name = name;
        this.basicPay = basicPay;
        this.daPay = daPay;
        this.hraPay = hraPay;
        /*
        id: number;
        name: string;
        basicPay: number;
        daPay: number;
        hraPay: number;
    
        constructor(id: number, name: string, basicPay: number, daPay: number, hraPay: number) {
            this.id = id;
            this.name = name;
            this.basicPay = basicPay;
            this.daPay = daPay;
            this.hraPay = hraPay;
        }
        */
        this.totalSalary = 0;
    }
    Object.defineProperty(Employee.prototype, "TotalSalary", {
        get: function () {
            return this.totalSalary;
        },
        enumerable: false,
        configurable: true
    });
    // set TotalSalary(value: number) {
    //     this.totalSalary = value
    // }
    Employee.prototype.calculateSalary = function () {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay;
    };
    return Employee;
}());
exports.Employee = Employee;
