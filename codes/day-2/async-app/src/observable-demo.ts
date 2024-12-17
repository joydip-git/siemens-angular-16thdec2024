import { Observable, of } from "rxjs";
import { Todo } from "./todo";

const todos: Todo[] = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
}
]

const todosObservable: Observable<Todo[]> = of(todos)

todosObservable
    .subscribe({
        next: (todos) => { console.log(todos) },
        error: (e) => { console.log(e) },
        complete: () => { console.log('next task to do') }
    })
