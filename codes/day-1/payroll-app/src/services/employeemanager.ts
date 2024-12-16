import { Employee } from "../models/employee";
import { employees } from "../repository/employees";
import { IManagerOperations } from "./manageroperations";

export class EmployeeManager implements IManagerOperations {
    add(e: Employee): boolean {
        let exists = false
        if (employees.length > 0) {
            const found = employees.find(
                (emp: Employee) => emp.id === e.id
            )
            if (found)
                exists = true
        }

        if (exists)
            return false
        else {
            e.calculateSalary()
            employees.push(e)
            return true
        }
    }
    printAll(): void {
        employees.forEach(
            (e: Employee) => console.log(`Total Salary of ${e.name} is ${e.TotalSalary}`)
        )
    }

    filterBySalary(criteria: number): Readonly<Employee[]> {
        return employees.filter(
            (e: Employee) => e.TotalSalary > criteria
        )
    }

}