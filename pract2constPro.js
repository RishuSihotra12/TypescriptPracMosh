var Point1 = /** @class */ (function () {
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point1.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (Value) {
            if (Value < 0)
                throw new Error("Value cannot be 0");
            this.x = Value;
        },
        enumerable: false,
        configurable: true
    });
    return Point1;
}());
var point1 = new Point1(2, 5);
var x = point1.X;
point1.X = 20;
console.log(x);
