"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
var employees_1 = require("../repository/employees");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.add = function (e) {
        var exists = false;
        if (employees_1.employees.length > 0) {
            var found = employees_1.employees.find(function (emp) { return emp.id === e.id; });
            if (found)
                exists = true;
        }
        if (exists)
            return false;
        else {
            e.calculateSalary();
            employees_1.employees.push(e);
            return true;
        }
    };
    EmployeeManager.prototype.printAll = function () {
        employees_1.employees.forEach(function (e) { return console.log("Total Salary of ".concat(e.name, " is ").concat(e.TotalSalary)); });
    };
    EmployeeManager.prototype.filterBySalary = function (criteria) {
        return employees_1.employees.filter(function (e) { return e.TotalSalary > criteria; });
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
