// Three ways of declaring variables in javascript
// 1. let
// 2. const
// 3. var

// let and const is the modern way while var is the old way.

//1. let : the let keyword is used to declare variables that can change later during the execution of our program
let age = 30;
// reassigning or mutate a value to a variable
age = 31;
console.log(age);

// 2. const : they are used to declare variables that are not supposed to change at any point in the future. the value in a const variable cannot be changed. 

const birthYear = 1991;
// birthYear = 1990;
// it will give an error when you reassign the variable another value because constants cannot be reassigned or mutated.

// it creates a variable that cannot be assigned. An immutable variable.

// the birthYear is a perfect example for const because the birthyear of a person can never change but the age can change.

// you cannot declare empty const variables
// const job;

// you need an initial value for const

// changing variables can lead to bugs in your code so they should be little use of let and be sure that the value of the variable needs to change at some point. use const more often.

// 3. var: should be completely avoided. it is the old way of declaring variables.

var job = 'programmer';
job = 'teacher';

// it is allowed to mutate or reassign values to a variable.

// let is block scoped and var is function scoped.

lastName = 'Schmedtmann';
console.log(lastName);
// javascript will execute  this  code to the console even without declaring the variable by using let , const or var. this is a terrible idea. Always declare variables. 


// Assesment
let myName = 'Angela';
myName = 'Joy'; //ressigning a new value to the variable
console.log(myName);

const myBirthYear = 1992;
console.log(myBirthYear);
