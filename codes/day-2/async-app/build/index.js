"use strict";
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
        .then(function (response) {
        response
            .json()
            .then(function (data) { return console.log(data.slice(0, 5)); }, function (e) { return console.log(e); });
    }, function (err) {
        console.log(err);
    });
}
getData();
