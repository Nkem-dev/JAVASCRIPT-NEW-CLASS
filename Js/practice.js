let myNumber = 15;
console.log(myNumber);

const PI = 3.1415;
console.log(PI);

// data types
const newNumber = 23;
const myString = "Hello World";
const myBoolean = true;
let myUndefined;
const myNull = null;
console.log(myNull);

// Type conversion
// convert to string
let value = '';
value = String(55);
console.log(value);

let number = 25;
let string = number . toString();
console.log(string);

// challenge
let string1 = '52';
let string2 = '52';
// convert to numbers
string1 = Number('52');
string2 = Number('52');

let string3 = string1 + string2;
console.log(typeof string3);



// Type coersion
// Type coersion is when javascript converts types of data for us automatically
// Example;
const firstNumber = '5';
const secondNumber = 6;
const sum = firstNumber + secondNumber;
console.log(sum);
// Javascript transforms the other variable into a string that is why the result is 56. 

// Naming Variables
//1. variables can only contain letters, numbers, underscores and dollar signs
// 2. it must not start with a number

// Naming Conventions
// in cases where variable names contain multiple words, you can use camel case. eg; userPassword. You can also write variable names with underscore, eg user_password. it is best to use camel case in javascript.

const myNewNumber = '555-555-555';
console.log(myNewNumber);
const new_price = 199.68;
const website = 'coddy.tech';
const thisIsAGreatCourse = true;

// use descriptive names for variables that describe the piece of data they hold

// Basic operations
const num1 = 10;
const num2 = 2;

// sum
const add = num1 + num2;
console.log(add);

// difference
const subtract = num1 - num2;
console.log(subtract);

// product
const multiply = num1 * num2;
console.log(multiply);

// quotient
const divide = num1 / num2;
console.log(divide);


// Number and math object
// the math object is used for more complex mathematics.

// MATH METHODS

// Getting the value of PI
newValue = Math.PI;
console.log(newValue);

// Rounding a number
roundValue = Math.round(2.4);
console.log(roundValue);

// Rounding down to the nearest whole number
wholeValue = Math.floor(3.67);
console.log(wholeValue);

// Rounding up to the nearest whole number
wholeUpValue = Math.ceil(2.1);
console.log(wholeUpValue);

// Calculating square root
sqrtValue = Math.sqrt(64);
console.log(sqrtValue);

// Absolute value
absValue = Math.abs(-5);
console.log(absValue);

// Powers(First number to the power of second number)
powerValue = Math.pow(8, 2);
console.log(powerValue);

// minimum
minValue = Math.min(5, 2, 1, 4, 6);
console.log(minValue);

// maximum
maxValue = Math.max(2, 3, 1, 5, 4);
console.log(maxValue);

// Random value
randomValue = Math.random();
console.log(randomValue);


// challenge
let numm1 = 4;
let numm2 = 9;

// calculate the sum
let sumTotal = numm1 + numm2;
console.log(sumTotal);

// print the small number
smallValue = Math.min(numm1, numm2);
console.log(smallValue);

// first number to the power of 2
sumTotal = Math.pow(4, 2);
console.log(sumTotal);









