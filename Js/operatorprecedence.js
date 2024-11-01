// Precedence of different operators
const birthyear = 2037;
const ageJonas = birthyear - 1991;
const ageSarah = birthyear - 2018;

console.log(birthyear - 1991 > birthyear - 2018);
// QUESTION;
// why are the substractions executed before the comparison operator and why does this work?

// ANSWER;
// It works this way because javascript has a well defined order of operator precedence. It is basically the order in which operators are executed.

// check out mdn operator precedence to see the precedence of different operators. mdn stands for mozilla development network.


// greater than has a lower precedence than subtraction. greather than is 12 while substraction is 14

// math operators are executed left to right
console.log(25-10-5);

let x, y;
x = y = 25-10-5;
// x = y = 10
console.log(x,y);

// substraction was executed first because it has a higher precedence
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)