"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
var employee_1 = require("./employee");
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    //incentivePay: number;
    function Developer(id, name, basicPay, daPay, hraPay, incentivePay) {
        var _this = _super.call(this, id, name, basicPay, daPay, hraPay) || this;
        _this.incentivePay = incentivePay;
        return _this;
        //this.incentivePay = incentivePay
    }
    Developer.prototype.calculateSalary = function () {
        return _super.prototype.calculateSalary.call(this) + this.incentivePay;
    };
    return Developer;
}(employee_1.Employee));
exports.Developer = Developer;
