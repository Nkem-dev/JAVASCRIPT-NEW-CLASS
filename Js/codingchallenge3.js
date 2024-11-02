// TEST DATA; Dolphins score 96, 100 and 89. Koalas score 88, 91 and 110

// average score for each team
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

console.log(averageDolphins);
console.log(averageKoalas);


// comparing the team's average scores to determine the winner of the competition.
if (averageDolphins > averageKoalas) {
    console.log('Team Dolphins win!');
} else if (averageKoalas > averageDolphins) {
    console.log('Team Koalas win!');
} else if(averageDolphins === averageKoalas) {
    console.log('There is a draw!');
} else{
    console.log('No team wins!');
}

// BONUS 1
const newAverageDolphins = (97 + 112 + 101) / 3;
const newAverageKoalas = (109 + 95 + 123) / 3;

console.log(newAverageDolphins);
console.log(newAverageKoalas);


if(newAverageDolphins > newAverageKoalas && newAverageDolphins >= 100) {
    console.log('Team Dolphins win! ');
} else if(newAverageKoalas > newAverageDolphins && newAverageKoalas >= 100) {
    console.log('Team Koalas win!');
} else if(newAverageDolphins === newAverageKoalas) {
    console.log('Both team wins!');
}


// BONUS 2
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;
console.log(avgDolphins);
console.log(avgKoalas);


if(avgDolphins > avgKoalas && avgDolphins >= 100){
    console.log('Dolphins win the trophy!');
} else if(avgKoalas > avgDolphins && avgKoalas >= 100){
    console.log('Koalas win the trophy!');
} else if(avgDolphins === avgKoalas && avgDolphins >=100 && avgKoalas >=100) {
    console.log('Both Team win the trophy!');
} else{
    console.log('No Team wins the trophy!');
}