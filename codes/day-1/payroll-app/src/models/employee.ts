export class Employee {
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
    constructor(public id: number, public name: string, public basicPay: number, public daPay: number, public hraPay: number) {

    }
    calculateSalary(): number {
        return this.basicPay + this.daPay + this.hraPay
    }
}