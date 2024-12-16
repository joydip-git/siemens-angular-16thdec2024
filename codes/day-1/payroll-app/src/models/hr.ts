import { Employee } from "./employee"

export class Hr extends Employee {
    //gratuityPay: number;

    constructor(id: number, name: string, basicPay: number, daPay: number, hraPay: number, public gratuityPay: number) {

        super(id, name, basicPay, daPay, hraPay)
        //this.gratuityPay = gratuityPay
    }

    calculateSalary(): number {
        return super.calculateSalary() + this.gratuityPay
    }
}