# 10 Days of Javascript - Day 5

To view solutions, open the file `/Day5/index.html` in your browser.
Do not forget to open the Developer panel and see the section `Console`.

##Day 5: Inheritance

**Task**:

We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

1. Add an area method to Rectangle's prototype.
2. Create a Square class that satisfies the following:
    * It is a subclass of Rectangle.
    * It contains a constructor and no other methods.
    * It can use the Rectangle class' area method to print the area of a Square object.

Locked code in the editor tests the class and method implementations and prints the area values to `STDOUT`.

**Solution**:

In `js/inheritance.js`.

##Day 5: Template Literals

**Task**:

The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle
to a tag function named sides. Recall that the first argument of a tag function is an array of string literals
 from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:

1. Finds the initial values of `s1` and `s2` by plugging the area and perimeter values into the formula:

```html
s = (p +- sqrt(pow(p,2) - 16 * A) / 4
```

where `A` is the rectangle's area and `P` is its perimeter.

2. Creates an array consisting of `s1` and `s2` and sorts it in ascending order.

3. Returns the sorted array.

**Solution**:

In `js/template-literals.js`.

##Day 5: Arrow Functions

**Task**:

Complete the function in the editor. It has one parameter: an array, `nums`. It must iterate through the array
performing one of the following actions on each element:

* If the element is even, multiply the element by `2`.

* If the element is odd, multiply the element by `3`.

The function must then return the modified array.

**Solution**:

In `js/arrow-functions.js`.

Return to [navigation list](/README.md "navigation list")