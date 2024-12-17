define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dataStorage = void 0;
    var DataStorage = /** @class */ (function () {
        function DataStorage() {
            this.storage = new rxjs_1.BehaviorSubject(0);
            this.storageObservable = this.storage.asObservable();
        }
        DataStorage.prototype.publish = function (value) {
            this.storage.next(value);
        };
        return DataStorage;
    }());
    exports.dataStorage = new DataStorage();
});
