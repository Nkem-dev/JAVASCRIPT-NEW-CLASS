// this is an alternative way of writing a complicated ifelse statement 

// week day variable with one activity to each day

const day = 'wednesday';

// we are switching the day
switch(day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
    console.log('Enjoy the weekend');
    break;
    default: //like an else block
        console.log('Not a valid day!');
}

// without break, the code continues executing.
// it does a strict equality comparison.


// using ifelse statement
const thisDay = 'thursday';
 if(thisDay === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
 } else if(thisDay === 'tuesday') {
    console.log('Prepare theory videos');
 } else if(thisDay === 'wednesday' || thisDay === 'thursday') {
    console.log('Write code examples');
 } else if(thisDay === 'friday'){
    console.log('Record videos');
 }else if(thisDay === 'saturday' ||thisDay === 'sunday'){
    console.log('Enjoy the weekend');
 } else{
    console.log('Not a valid day');
 }

const grade = 30;

switch(grade) {
    case 80:
        console.log('A');
        break;
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
        console.log('B');
        break;
    case 60:
        console.log('C');
        break;
    case 50:
        console.log('D');
        break;
    case 40:
        console.log('E');
        break;
    case 30:
        console.log('F');
        break;
        default:
            console.log('No grade!');
      
}

// ifelse statement
if(grade === 80) {
    console.log('A');
} else if(grade === 70 || grade === 71 || grade === 72 || grade === 73 || grade === 74 || grade === 75) {
    console.log('B');
} else if(grade === 60){
    console.log('C');
} else if(grade === 50){
    console.log('D');
} else if(grade === 40){
    console.log('E');
} else if(grade === 30){
    console.log('F');
} else{
    console.log('No grade!');
}