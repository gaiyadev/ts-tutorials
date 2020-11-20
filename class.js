var Rectanle = /** @class */ (function () {
    function Rectanle(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Rectanle.prototype.getArea = function () {
        return length * this.breadth;
    };
    return Rectanle;
}());
var std = new Rectanle(23, 2);
console.log(std.getArea());
