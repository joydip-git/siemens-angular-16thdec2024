//import { BehaviorSubject } from "rxjs";
import { Todo } from "./todo";
const { BehaviorSubject } = rxjs;

class TodosStorage {
    private storage = new BehaviorSubject<Todo[]>([])
    storageObservable = this.storage.asObservable()

    publish(value: Todo[]) {
        this.storage.next(value)
    }
}

export const todoStorage = new TodosStorage()
