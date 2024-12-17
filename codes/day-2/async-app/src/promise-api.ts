const add = (a: number, b: number) => a + b

const divide = (a: number, b: number) => {
    //const p = new Promise<void>(
    const p = new Promise<number>(
        (resolveFn, rejectFn) => {
            const divRes = a / b
            if (divRes === Infinity) {
                const error = new Error('divisor is be zero')
                //update promise's state to 'rejected'
                rejectFn(error)
            }
            else {
                //return divRes
                //update promise's state to 'resolved/fulfilled'
                //console.log(divRes)
                //resolveFn(divRes)
                resolveFn(divRes)
            }
        }
    )
    return p
}

const divPromise = divide(12, 3)
// divPromise
//     .then(
//         //executed when Promise is "fulfilled/resolved"
//         (x) => { console.log(x) },
//         //executed when Promise is "rejected"
//         (e) => { console.log(e) }
//     )
divPromise
    .catch(
        // executed when Promise is "rejected"
        (e) => { console.log(e) }
    )

const addRes = add(12, 3)
console.log(addRes);

