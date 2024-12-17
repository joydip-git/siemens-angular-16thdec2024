define(["require", "exports", "./data-storage"], function (require, exports, data_storage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //subscriber
    var dataSub = data_storage_1.dataStorage
        .storageObservable
        .subscribe({
        next: function (data) { return console.log('client: ' + data); },
        error: function (e) { return console.log(e); }
    });
    setTimeout(function () {
        dataSub.unsubscribe();
        console.log('cancelled subscription...');
    }, 20000);
    //publisher
    var value = 1;
    setInterval(function () {
        console.log('publishing: ' + value);
        data_storage_1.dataStorage.publish(value);
        ++value;
    }, 2000);
});
