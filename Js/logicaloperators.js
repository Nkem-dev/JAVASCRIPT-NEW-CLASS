const hasDriversLicense = true;  //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
// && is used to represent AND operator

console.log(hasDriversLicense ||hasGoodVision);
// || is used to represent OR operator.

console.log(!hasDriversLicense);
// ! is used to represent NOT operator

// our module below is saying sarah should drive if she has a driver's license and if she has good vision

// we can use variables and boolean logic to module complex situations.

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicense ||hasGoodVision || isTired);

console.log(hasDriversLicense &&hasGoodVision && isTired);


if(hasDriversLicense && hasGoodVision &&!isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}



