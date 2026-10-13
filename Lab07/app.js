const calc = require("./calculator");

console.log("Addition:", calc.add(10, 5));
console.log("Subtraction:", calc.subtract(10, 5));
console.log("Multiplication:", calc.multiply(10, 5));
console.log("Division:", calc.divide(10, 5));
console.log("Divide by zero:", calc.divide(10, 0));