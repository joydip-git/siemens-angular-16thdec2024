"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var developer_1 = require("./models/developer");
var hr_1 = require("./models/hr");
var employeemanager_1 = require("./services/employeemanager");
//1. create new employees
var anilDeveloper = new developer_1.Developer(1, "anil", 1000, 2000, 3000, 4000);
var sunilHr = new hr_1.Hr(2, "sunil", 1200, 2200, 3200, 4200);
var manager = new employeemanager_1.EmployeeManager();
//2. add them into array
console.log(manager.add(anilDeveloper) ? 'added' : 'not added');
console.log(manager.add(sunilHr) ? 'added' : 'not added');
//3. iterate through the array and print everyone's total salary
manager.printAll();
//4. filter the employees with total salary more than some value
console.log("employees with total salary more than 10500");
manager
    .filterBySalary(10500)
    .forEach(function (e) { return console.log("".concat(e.name, ":").concat(e.TotalSalary)); });
