"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var developer_1 = require("./models/developer");
var hr_1 = require("./models/hr");
var employees_1 = require("./repository/employees");
//1. create new employees
var anilDeveloper = new developer_1.Developer(1, "anil", 1000, 2000, 3000, 4000);
var sunilHr = new hr_1.Hr(2, "sunil", 1200, 2200, 3200, 4200);
//2. add them into array
// employees.push(anilDeveloper)
// employees.push(sunilHr)
employees_1.employees.push(anilDeveloper, sunilHr);
//3. iterate through the array and print everyone's total salary
for (var _i = 0, employees_2 = employees_1.employees; _i < employees_2.length; _i++) {
    var employee = employees_2[_i];
    var totalSalary = employee.calculateSalary();
    console.log("Total Salary of ".concat(employee.name, " is ").concat(totalSalary));
}
