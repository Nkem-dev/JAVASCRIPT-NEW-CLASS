// falsy values are values that are not exactly false but will become false when we try to convert them into a boolean.

// There are 5 falsy values 
// 1. 0
// 2. '' (empty string)
// 3. undefined
// 4. null
// 5. NaN (Not a Number)

// these values are not exactly false but  will become false when you attempt to convert them to a boolean

// Any number that is not 0 or any string that is not an empty string will be converted to true when we attempt to convert them to a boolean.

console.log(Boolean(0));  //false
console.log(Boolean(undefined));  //false
console.log(Boolean('jonas'));  //true
console.log(Boolean({}));   //true
console.log(Boolean(''));  //false

// conversion to boolean is always type coercion that javascript does automatically behind the scenes.

// Javascript does type coercion during logical operation. for example; in the condition of an if else statement.

const money = 0;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

// it will be converted to false because money is 0 and 0 is falsy value

// if you change the value to 10, it will be converted to true

let height;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}

// height wasn't assigned any value so it is undefined and undefined is a falsy value.