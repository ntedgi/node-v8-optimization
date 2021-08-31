class Point {
    constructor(_x, _y) {
        this.x = _x
        this.y = _y
    }
}
const obj = new Point(7, 5)
obj.z = 12
console.log(`(${obj.x},${obj.y})`)

