import { Developer } from "./models/developer"
import { Hr } from "./models/hr"
import { employees } from "./repository/employees"

//1. create new employees
const anilDeveloper = new Developer(1, "anil", 1000, 2000, 3000, 4000)
const sunilHr = new Hr(2, "sunil", 1200, 2200, 3200, 4200)

//2. add them into array
// employees.push(anilDeveloper)
// employees.push(sunilHr)
employees.push(anilDeveloper, sunilHr)

//3. iterate through the array and print everyone's total salary
for (const employee of employees) {
    const totalSalary = employee.calculateSalary()
    console.log(`Total Salary of ${employee.name} is ${totalSalary}`);
}