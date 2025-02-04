// An operator allows us transform or combine multiple values.

// categories of operators
// 1. Mathematical operators
// 2. Comparison operators
// 3. Logical operators
// 4. Assignment operators

// 1. Mathematical or Arithmetic operators; We can use addition, substraction, division, multiplication.

// MATHEMATICAL OPERATORS

// 1. Minus 
const birthyear = 2037;
const ageJonas = birthyear - 1991;
const ageSarah = birthyear - 2018;
console.log(ageJonas, ageSarah);
// you can log more than one value in a console.log

// multiplication
console.log(ageJonas * 2);

// division
console.log(ageJonas / 10);

// module
console.log(ageSarah % 3);

// power
console.log(ageSarah ** 3);

console.log(ageJonas * 2, ageJonas / 10, 2 **3);
//  2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Addition
// we can use the addition operator to join strings or to concatenate strings

const firstName = 'Jonas';
const lastName = 'Schmedtman';
console.log(firstName + ' ' + lastName);

//3. typeof operator
const newCountry = 'Japan';
console.log(typeof newCountry);
// gives us the typeof the value

// ASSIGNMENT OPERATORS
// the = sign is the assignment operator

let x = 10 + 5; // x will be assigned 15 because the addition operator is executed before the assignment operator.

x += 10; 
// it simply means x = x + 10 = 25. we reassigned the x value. 15 + 10 = 25; that's why let was used.

x *= 4;
// x = x * 4. 25 * 4 = 100

x++;
// x = x + 1. 100 + 1 = 101. increases the value by 1

x--;
// x = x - 1. 101 -1 = 100

x--;
// decreases the value by 1.

console.log(x);

// COMPARISON OPERATORS
// they are used to produce boolean values. the result of a comparison operator should be a boolean.
console.log(ageJonas > ageSarah);

// this is important in taking decisions based on conditions in our code.

// we have >, <, >=, <=
// greater than, less than, greater than equals to, less than equals to

console.log(ageSarah >= 18);
// you will store the results in variables and not always log the results to the console.

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(birthyear - 1991 > birthyear - 2018);

// LOGICAL OPERATORS
// 1. AND
// 2. NOT
// 3. OR

// AND is represented with &&
const myRealName = 'Juliet';
const myFakeName = 'Joy';

if(myRealName === 'Juliet' && myFakeName === 'Joy'){
    console.log('Yay!I have both names')
} else{
    console.log('Oops! I just have one name');
}

// NOT is represented with !
console.log(!myRealName); //output as false because ! serves as inverse. if true, it will become false and if false it will bevome true

// OR is represented with ||
if(myRealName === 'Juliet' || myFakeName === 'destiny'){
    console.log('Yay!I have both names')
} else{
    console.log('Oops! I just have one name');
}

