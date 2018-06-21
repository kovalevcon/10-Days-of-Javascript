// ********** Test **********

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

// ********** End of Test **********

// ********** Solution **********

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
  return ( this.w * this.h );
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}

// ********** End of Solution **********

// ********** Test **********

console.log('Task: Inheritance');

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
  const rec = new Rectangle(3, 4);
  const sqr = new Square(3);

  console.log(`Input value {rec}:`);
  console.log(rec);
  console.log(`rec.area() = ${rec.area()}`);

  console.log(`Input value {sqr}:`);
  console.log(rec);
  console.log(`sqr.area() = ${sqr.area()}`);
} else {
  console.log(-1);
  console.log(-1);
}

// ********** End of Test **********