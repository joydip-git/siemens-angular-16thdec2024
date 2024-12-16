import { Developer } from "./models/developer"
import { Employee } from "./models/employee"
import { Hr } from "./models/hr"
import { EmployeeManager } from "./services/employeemanager"

//1. create new employees
const anilDeveloper = new Developer(1, "anil", 1000, 2000, 3000, 4000)
const sunilHr = new Hr(2, "sunil", 1200, 2200, 3200, 4200)

const manager = new EmployeeManager()
//2. add them into array
console.log(manager.add(anilDeveloper) ? 'added' : 'not added')
console.log(manager.add(sunilHr) ? 'added' : 'not added')

//3. iterate through the array and print everyone's total salary
manager.printAll()

//4. filter the employees with total salary more than some value
console.log(`employees with total salary more than 10500`)

manager
    .filterBySalary(10500)
    .forEach(
        (e: Employee) => console.log(`${e.name}:${e.TotalSalary}`)
    )