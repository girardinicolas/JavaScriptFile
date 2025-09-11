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
exports.Rettangolo = void 0;
var Forma_1 = require("./Forma");
var Rettangolo = /** @class */ (function (_super) {
    __extends(Rettangolo, _super);
    function Rettangolo(base, altezza) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altezza = altezza;
        return _this;
    }
    Rettangolo.prototype.area = function () {
        return this.base * this.altezza;
    };
    return Rettangolo;
}(Forma_1.Forma));
exports.Rettangolo = Rettangolo;
// Test
var rettangolo = new Rettangolo(5, 10);
console.log("Area del rettangolo:", rettangolo.area());
