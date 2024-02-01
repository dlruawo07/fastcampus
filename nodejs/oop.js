class Figure {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Figure {
  constructor(base, height) {
    super(base, height); // Call the constructor of the parent class
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2; // Use this.height instead of just height
  }
}

// Example usage:
const triangle = new Triangle(5, 10);
console.log(triangle.getArea()); // Output: 25

const rectangle = new Figure(5, 10);
console.log(rectangle.getArea()); // Output:
