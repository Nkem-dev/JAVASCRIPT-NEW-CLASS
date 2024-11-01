const age = 18;
if(age === 18){ 
    console.log("you just became an adult!");
}
// to check if it is exactly 18
// === returns a true or false value. true will only be the result of the operator in the case that both sides are the same.

// === is a strict equality operator because it does not perform type coercion and only returns true when both values are exactly the same.

// == is the loose equality operator and does type coercion

// when comparing values avoid the loose equality operator and make use of the strict equality operator.

// prompt function is used to get a value from a webpage
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) { 
    console.log('Cool! 23 is an amazing number');
} else if(favourite === 7) {
    console.log('7 is also a cool number');
} else if(favourite === 9) {
    console.log('9 is also a cool number');
}
else {
    console.log('Number is not 23 or 7 or 9');
}

// different operator(not)
// the strict version is !== 
// the loose version is !=
if(favourite !== 23) {
    console.log('Why not 23?');
}

// make sure to use the strict version of both equality and different operator.