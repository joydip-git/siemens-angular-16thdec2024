import { Todo } from "./todo";
import { todoStorage } from "./todos-storage";

//subscriber
todoStorage.storageObservable.subscribe({
    next: (data) => console.log(data.slice(0, 3)),
    error: (e) => console.log(e)
})

//publisher
function getData() {
    try {
        const request = new XMLHttpRequest()
        request.onreadystatechange = function () {
            console.log(`ReadyStateValue=${request.readyState}`);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText) as Todo[]
                todoStorage.publish(data)
            }
        }

        request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
        request.send()
    } catch (error) {
        console.log(error);
    }
}
setTimeout(
    () => getData(),
    5000
)