type logicFnType<T> = (x: T) => boolean
function filterValues<T>(input: T[], fnRef: logicFnType<T>): T[] {
    const result: T[] = []
    for (const element of input) {
        //if (element % 2 === 0)
        const status = fnRef(element)
        if (status)
            result.push(element)
    }
    return result
}

//source of data
const numbers = [1, 2, 3, 4, 5, 6]

//logic to apply on every element in that array
const isOdd: logicFnType<number> = function (num: number) {
    return num > 4
}

//get the array filtered
const output = filterValues<number>(numbers, isOdd)

//display the filtered elements
for (const element of output) {
    console.log(element);
}

const names = ['anil', 'sunil', 'joydip']
names
    .filter((name: string) => name.includes('n'))
    .sort((a: string, b: string) => b.localeCompare(a))
    .forEach((name: string) => console.log(name))
/*
const namesWithN = filterValues<string>(
    names,
    (name: string) => name.includes('n')
)
namesWithN
    .sort(
        (a: string, b: string) => a.localeCompare(b)
    )
    .forEach((name: string) => console.log(name))
*/
//callback
function add(a: number, b: number): number {
    return a + b
}

type fnType = (x: number, y: number) => number
//delegate number fnType(a: number, b: number);
function invoke(fnRef: fnType, x: number, y: number) {
    console.log(fnRef(x, y))
}
invoke(add, 12, 13)

//custom data types in TS
type myType = string | number | boolean;
function accept(value: myType): myType {
    return 'your value is ' + value
}
type employeeType = {
    id: number,
    name: string,
    salary: number
}
const anilEmp: employeeType = {
    id: 1,
    name: 'anil',
    salary: 1000
}