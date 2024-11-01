// Values can have different types depending on the type of data that we want them to hold.
// in javascript, every values can either be an object or primitive value

// two types of datatypes is
// 1. Primitive data type
// 2. Non-primitive data type

// object value;
let me = {
    name: 'Jonas'
};

// primitive value
let firstName = 'Jonas';
let age = 30;

// There are 7 primitive data types
// 1. Number; They are floating point numbers(it means they always have decimals even though you can or cannot see them) used for decimals and integers. Example: let age = 23;

// 2. String; They are a sequence of characters and they are used for texts. Example: let firstName = 'Jonas'; They must always be in quotes, whether single quotes or double quotes if not javascript will confuse them for variable names.

// 3. Boolean; It is a logical type that can only be true or false. It is used for taking decisions. Example: let fullAge = true;

// 4. Undefined; It is a value that is taken by a variable that is not yet defined('empty value') Example: let children; It is simply a variable that is declared but not yet assigned a value.

// 5. Null: It also means empty value.

// 6. Bigint(big integer): larger integers than the number type can hold. It allows for the storage of larger numbers.

// 7. Symbol: It is a value that is unique and cannot be changed

// Number , String , and Boolean are the most common and most important primitive data types.

// Javascript has dynamic typing. You do not have to manually define the data type of the value stored in a variable. instead, data types are determined automatically.
// Variables stores value that have a type.

// Boolean data type
true;
console.log(true);

// you can store booleans in  a variable
let javascriptIsFun = true;
console.log(javascriptIsFun);
// it is the value that holds the data type and not the variable.
// javascript programs are executed from top to bottom.

// typeof is an operator that you can use to show the type of a value
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// dynamic typing means that you can change the type of a value that is held by a variable.
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// UNDEFINED DATA TYPE
let year;
console.log(year);
console.log(typeof year);
// undefined is both the value and the type of the value

// dynamic typing
year = 1991;
console.log(typeof year);

console.log(typeof null);
// it returns as object. This is regarded as a bug in javascript.

