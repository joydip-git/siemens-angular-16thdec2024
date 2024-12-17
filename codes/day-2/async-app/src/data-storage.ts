import { BehaviorSubject } from "rxjs";

class DataStorage {
    private storage = new BehaviorSubject<number>(0)
    storageObservable = this.storage.asObservable()

    publish(value: number) {
        this.storage.next(value)
    }
}
export const dataStorage = new DataStorage()