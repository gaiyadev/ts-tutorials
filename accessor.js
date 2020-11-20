var MyDrawing = /** @class */ (function () {
    function MyDrawing() {
        this.length = 20;
        this.breadth = 15;
    }
    Object.defineProperty(MyDrawing.prototype, "rectangle", {
        get: function () {
            return this.length * this.breadth;
        },
        enumerable: false,
        configurable: true
    });
    return MyDrawing;
}());
console.log(new MyDrawing().rectangle);
