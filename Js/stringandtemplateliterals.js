const myName = 'Nkemjika';
const job = 'Programmer';
const myBirthYear = 1991;
const currentYear = 2037;

const nkem = "I'm " + myName + ' , a ' + (currentYear - myBirthYear) + ' years old ' + job + '!';
console.log(nkem);

// + sign is used to concatenate strings

// with template literals, you can write strings in a more normal way and then insert the variable directly into a string and they will be replaced.

// A template literal can assemble mutilple pieces into one final string.

// to write template literals, you use back ticks.

// template strings
const nkemNew = `i'm ${myName}, a ${currentYear - myBirthYear} year old ${job}!`;
console.log(nkemNew);

// you can also use back ticks to write all strings
console.log(`Just a regular string...`);


