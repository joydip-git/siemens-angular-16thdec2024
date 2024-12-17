define(["require", "exports", "./todos-storage"], function (require, exports, todos_storage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //subscriber
    todos_storage_1.todoStorage.storageObservable.subscribe({
        next: function (data) { return console.log(data.slice(0, 3)); },
        error: function (e) { return console.log(e); }
    });
    //publisher
    function getData() {
        try {
            var request_1 = new XMLHttpRequest();
            request_1.onreadystatechange = function () {
                console.log("ReadyStateValue=".concat(request_1.readyState));
                if (request_1.readyState === 4 && request_1.status === 200) {
                    var data = JSON.parse(request_1.responseText);
                    todos_storage_1.todoStorage.publish(data);
                }
            };
            request_1.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
            request_1.send();
        }
        catch (error) {
            console.log(error);
        }
    }
    setTimeout(function () { return getData(); }, 5000);
});
