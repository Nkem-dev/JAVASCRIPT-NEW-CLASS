// Type conversion is when we manually convert from one data type to another.

// Type coercion is when Javascript automatically converts the data type behind the scenes for us.

// Type conversion
// converting string to number
const inputYear = '1991';
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

// converting number to string
console.log(String(23), 23);

// Javascript can only convert to a number, to a string and to a boolean.


// Type coercion
// Whenever an operator is dealing with two values that have different types. Javascript will behind the scenes convert one of the values to match the other value so that the code can be executed.

// javascript converts the number to string
console.log('I am ' + 23 + ' years old');

// javascript converts the string to number
console.log('23' - '10' - 3);
// the minus operator triggers the opposite conversion. if you use the plus operator, it will concatenate the strings and it will display as a string

console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;  //11
n = n - 1;      //11 - 1
console.log(n);   //10




