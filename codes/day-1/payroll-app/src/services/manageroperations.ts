import { Employee } from "../models/employee";

export interface IManagerOperations {
    add(e: Employee): boolean;
    printAll(): void;
    filterBySalary(criteria: number): Readonly<Employee[]>;
}