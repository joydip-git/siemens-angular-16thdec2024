// async function getData() {
//     try {
//         const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data = await response.json()
//         console.log(data.slice(0, 5));
//     } catch (error) {
//         console.log(error);
//     }
// }
function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(
            (response: Response) => {
                response
                    .json()
                    .then(
                        (data) => console.log(data.slice(0, 5)),
                        (e) => console.log(e)
                    )
            },
            (err) => {
                console.log(err);
            }
        )
}

getData()
