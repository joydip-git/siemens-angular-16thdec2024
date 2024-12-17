const addFn = (a: number, b: number) => a + b

const divideFn = async (a: number, b: number) => {
    const divRes = a / b
    if (divRes === Infinity)
        throw new Error('divisor is zero')
    else
        return divRes
}

async function callDivide() {
    try {
        //await can be used inside a fucntion, declared with async keyword
        const x = await divideFn(12, 3)
        console.log(x);
    } catch (e) {
        console.log(e);
    }
}

callDivide()

const addResult = addFn(12, 3)
console.log(addResult);

