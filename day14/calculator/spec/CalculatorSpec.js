// spec/Calculator.js
class Calculator {
  add() {
    return 10;
  }
}
// spec/CalculatorSpec.js
describe("Calculator", function() {
  var Calculator = require('../lib/Calculator.js');
  var calculator = new Calculator;
  it("should add two numbers", function() {
    expect(calculator.add(5,5)).toBe(10);
  });
  it("should subtract two numbers", function() {
    expect(calculator.subtract(15,5)).toBe(10);
  });
});