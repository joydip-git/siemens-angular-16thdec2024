async function getTodos() {
    try {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log(data.slice(0, 5));
    } catch (error) {
        console.log(error);
    }
}