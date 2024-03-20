## JavaScript Math Object Cheat Sheet

### Overview

The `Math` object in JavaScript is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.

### Constants

- `Math.E` - Euler's constant and the base of natural logarithms (~2.718).
- `Math.LN10` - Natural logarithm of 10 (~2.303).
- `Math.LN2` - Natural logarithm of 2 (~0.693).
- `Math.LOG10E` - Base 10 logarithm of E (~0.434).
- `Math.LOG2E` - Base 2 logarithm of E (~1.443).
- `Math.PI` - Ratio of a circle's circumference to its diameter (~3.14159).
- `Math.SQRT1_2` - Square root of 1/2 (~0.707).
- `Math.SQRT2` - Square root of 2 (~1.414).

### Methods

- `Math.abs(x)` - Returns the absolute value of x.
- `Math.ceil(x)` - Returns the smallest integer greater than or equal to x.
- `Math.floor(x)` - Returns the largest integer less than or equal to x.
- `Math.round(x)` - Returns the value of x rounded to the nearest integer.
- `Math.max(x, y, ..., z)` - Returns the largest of zero or more numbers.
- `Math.min(x, y, ..., z)` - Returns the smallest of zero or more numbers.
- `Math.pow(x, y)` - Returns base x to the exponent power y (i.e., x^y).
- `Math.sqrt(x)` - Returns the positive square root of x.
- `Math.random()` - Returns a pseudo-random number between 0 and 1.
- `Math.log(x)` - Returns the natural logarithm (log_e, also ln) of x.
- `Math.exp(x)` - Returns e^x, where x is the argument, and e is Euler's number (the base of the natural logarithms).
- `Math.sin(x)` - Returns the sine of x (x is in radians).
- `Math.cos(x)` - Returns the cosine of x (x is in radians).
- `Math.tan(x)` - Returns the tangent of x (x is in radians).
- `Math.asin(x)` - Returns the arcsine of x in radians.
- `Math.acos(x)` - Returns the arccosine of x in radians.
- `Math.atan(x)` - Returns the arctangent of x as a numeric value between -π/2 and π/2 radians.
- `Math.atan2(y, x)` - Returns the angle in radians between the positive x-axis of a plane and the point given by the coordinates (x, y) on it.

### Usage

```javascript
console.log(Math.PI); // 3.14159...
console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-123)); // 123
console.log(Math.round(4.7)); // 5
console.log(Math.random()); // Random number between 0 and 1
```

This cheat sheet covers the basics of the Math object in JavaScript. For more detailed information or additional methods and properties, refer to the MDN Web Docs or other comprehensive JavaScript references.
