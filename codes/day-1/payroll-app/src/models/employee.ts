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
    protected totalSalary: number = 0;

    constructor(public id: number, public name: string, public basicPay: number, public daPay: number, public hraPay: number) {

    }
    get TotalSalary() {
        return this.totalSalary
    }
    // set TotalSalary(value: number) {
    //     this.totalSalary = value
    // }
    calculateSalary(): void {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay
    }
}