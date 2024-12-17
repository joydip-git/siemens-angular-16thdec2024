define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var todos = [{
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
    ];
    var todosObservable = (0, rxjs_1.of)(todos);
    todosObservable
        .subscribe({
        next: function (todos) { console.log(todos); },
        error: function (e) { console.log(e); },
        complete: function () { console.log('next task to do'); }
    });
});
