// TEST DATA; Dolphins score 96, 100 and 89. Koalas score 88, 91 and 110

// average score for each team
const averageDolphins = (96 + 100 + 89) / 3;
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


    
