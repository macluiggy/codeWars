"use strict";
var Ball = function (ballType) {
    if (ballType === void 0) { ballType = 'regular'; }
    this.ballType = ballType;
};
var ball1 = new Ball('super');
console.log(ball1)
