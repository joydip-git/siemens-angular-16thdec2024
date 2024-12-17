define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.todoStorage = void 0;
    var BehaviorSubject = rxjs.BehaviorSubject;
    var TodosStorage = /** @class */ (function () {
        function TodosStorage() {
            this.storage = new BehaviorSubject([]);
            this.storageObservable = this.storage.asObservable();
        }
        TodosStorage.prototype.publish = function (value) {
            this.storage.next(value);
        };
        return TodosStorage;
    }());
    exports.todoStorage = new TodosStorage();
});
