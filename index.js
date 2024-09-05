// The Art of Calculation


class Calculator {
    constructor(PI, E) {
      this.PI = Math.PI;
      this.E = Math.E;
    }
  
  circle (r){
      return 2 * this.PI * r;
    }
  
  
  
    ratio (x, y, width){
      return (width * y) / x;
    }
  
    percentage (x, y){
      if (y === 0) {
          return `Error : Divisor can't be zero`;
      }
      return `${(x / y) * 100}%`;
    }
  
  
    // add two numbers;
  
    add (x, y){
      return x + y;
    }
    // subtract two numbers;
  
    subtract (x, y){
      return y - x;
    }
    // multiply two numbers;
  
    multiply (x, y){
      return x * y;
    }
    // divide two numbers;
  
    divide (x, y){
      if (y === 0) {
          return `Error : Divisor can't be zero`;
      }
      return x / y;
    }
  
    // return the remainder of two numbers;
  
  
    remainder (x, y){
      if (y === 0) {
          return `Error : Divisor can't be zero`;
      }
      return x % y;
    }
  
  
    //elevate x to the power of y;
  
  elevate (x , y){
      return Math.pow(x, y);
    }
  
  // return the square root of x;
  
    sqrt (x){
      if (x < 0) {
          return `Error : Square root of negative number is not possible`;
      }
      return Math.sqrt(x);
    }
  
  }
  
  
  
  const calc = new Calculator();
  console.log(calc.circle(5));
  console.log(calc.ratio(5,7,300));
  console.log(calc.percentage(3,12));
  console.log(calc.add(5, 7));         
  console.log(calc.subtract(5, 7));  
  console.log(calc.multiply(5, 7)); 
  console.log(calc.multiply(5, 7));    // 35
  console.log(calc.divide(35, 7));     // 5
  console.log(calc.remainder(7, 5));   // 2
  console.log(calc.elevate(5, 3));     // 125
  console.log(calc.sqrt(25));          // 5
  console.log(calc.sqrt(-25));         
  