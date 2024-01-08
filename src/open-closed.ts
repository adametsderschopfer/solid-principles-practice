// Open Close Principle

class Shape {
    area(): number {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(public size: number) {
        super()
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super()
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape {
    constructor(public width: number, public height: number) {
        super()
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Triangle extends Shape {
    constructor(public a: number, public b: number) {
        super()
        this.a = a
        this.b = b
    }

    area() {
        return (this.a * this.b) / 2
    }
}

class AreaCalculator {
    constructor(public shapes: Shape[]) {
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area();
            return acc
        }, 0)
    }
}


const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(10, 20),
    new Triangle(10, 15)
])

console.log(calc.sum())