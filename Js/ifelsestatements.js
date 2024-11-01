// to check if someone is of age to get a drivers liscence or not and if she is, it will print it to the console and if she is not it will show how many years is left for her go get a drivers liscence.

const age = 15;

// now that we have the boolean above, we will proceed to write an if statement for taking decisions.

// syntax
//  if(condition that is a boolean) {
// code to be executed here
// }

if(age >= 18) {
    console.log('Sarah can start driving liscense 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// else will be executed whenever the condition in the if statement is false


// ifelse is called an ifelse control structure because it allows us to have more control over the way that our code is executed. you can control codes that should be executed and the ones that should not be executed.

// create the century in which this person was born
const birthYear = 1991;

let century;
if(birthYear <= 2000) {
     century = 20;
}else {
     century = 21;
}
console.log(century);


// coding challenge2
const markNewMass = 78;
const markNewHeight = 1.69;

const johnNewMass = 92;
const johnNewHeight = 1.95;

const markAverageBMI = markNewMass / markNewHeight ** 2;

const johnAverageBMI = johnNewMass / johnNewHeight ** 2;

console.log(markAverageBMI, johnAverageBMI);

// create an ifelse statement
if (markAverageBMI > johnAverageBMI) {
    console.log(`Mark's BMI (${markAverageBMI}) is higher than John's (${johnAverageBMI})`);
} else {
    console.log(`John's BMI (${johnAverageBMI}) is higher than Mark's  (${markAverageBMI})`);
}






