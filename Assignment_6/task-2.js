// Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    console.log(`Width: ${width}`);
    console.log(`Height: ${height}`);
  }

  getArea() {
    console.log(`Width: ${width}`);
    console.log(`Height: ${height}`);
  }
}


class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return this.width * this.height;
  }
}


class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  
  getArea() {
    return 0.5 * this.width * this.height;
  }
}

const rectangleArea = new Rectangle(7, 10);
console.log("Area of Rectangle is: ", rectangleArea.getArea());

const triangleArea = new Triangle(8, 9);
console.log("Area of Triangle is: ", triangleArea.getArea());
