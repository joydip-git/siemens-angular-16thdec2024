var a = 10
//a = ''

function add(a: number, b: number): number {
    return a + b
}

class Person {
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    show(): string {
        return `Name=${this.name},Id=${this.id},Salary=${this.salary}`
    }
}
class Trainer extends Person {
    subject: string;
    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary)
        this.subject = subject;
    }
    show(): string {
        return `${super.show()}, Subject=${this.subject}`
    }
}

const joyTrainer = new Trainer(1, 'joydip', 1000, 'TypeScript')
console.log(joyTrainer.show());

const people: Person[] = [joyTrainer]

for (const element of people) {
    console.log(element.name);
}

const numbers: number[] = [1, 2, 3, 4, 5]