import { Subscription } from "rxjs";
import { dataStorage } from "./data-storage";

//subscriber
const dataSub: Subscription = dataStorage
    .storageObservable
    .subscribe({
        next: (data) => console.log('client: ' + data),
        error: (e) => console.log(e)
    })

setTimeout(
    () => {
        dataSub.unsubscribe();
        console.log('cancelled subscription...');
    },
    20000
)

//publisher
let value = 1
setInterval(
    () => {
        console.log('publishing: ' + value);
        dataStorage.publish(value)
        ++value
    },
    2000
)

