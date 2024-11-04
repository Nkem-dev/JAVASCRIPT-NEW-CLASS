// three ways of writing conditionals
// 1. ifelse statement
// 2. switch statement
// 3. Conditional(tenary) operator

//  the conditional operator allows us to write something similar to an ifelse statement but all in one line.

const age = 23; 
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// ? represents the tenary operator(serves as if block)
// : represents else block

// conditional operator is also called tenary operator because it has three parts unlike other opertors

// these three parts consist of the condition, the if part and the else part.

// an operator is an expression. it produces a value.
 
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine 🍷';
} else{
    drink2 = 'water 💧';
}
console.log(drink2);

// tenary operator can be used in a template literal since it is an expression. 
// We can have conditions inside of a template literal.

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


// the tenary operator is not thought as a replacement of ifelse statement. We still need ifelse statement all the time most especially when we have big blocks of code.

// the tenary operator is best for when we want to take quick decision.