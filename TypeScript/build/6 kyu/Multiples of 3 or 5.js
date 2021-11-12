"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = exports.Challenge1 = void 0;
var Challenge1 = /** @class */ (function () {
    function Challenge1() {
    }
    Challenge1.solution = function (number) {
        if (number <= 0)
            return 0;
        var arr = [];
        for (var i = 0; i < number; i++) {
            arr.push(i);
        }
        var arr2 = arr.filter(function (num) { return num % 3 === 0 || num % 5 === 0; });
        var arr3 = arr2.reduce(function (acum, current) { return acum + current; });
        return arr
            .filter(function (num) { return num % 3 === 0 || num % 5 === 0; })
            .reduce(function (acum, current) { return current + acum; });
    };
    return Challenge1;
}());
exports.Challenge1 = Challenge1;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number <= 0)
            return 0;
        var arr = [];
        for (var i = 0; i < number; i++) {
            arr.push(i);
        }
        return arr
            .filter(function (num) { return num % 3 === 0 || num % 5 === 0; })
            .reduce(function (acum, current) { return current + acum; });
    };
    return Challenge;
}());
exports.Challenge = Challenge;
console.log(Challenge.solution(10));
console.log(1 % 3);
console.log(__spreadArray([], Array(10), true).map(function (_, i) { return i; }));
