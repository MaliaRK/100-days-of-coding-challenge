// Answer 115:
function dayOfWeek(dayNumber: number): void{
    switch(dayNumber){
        case 1:
            console.log('Friday');
            break;
        case 2:
            console.log('Saturday');
            break;
        case 3:
            console.log('Sunday');
            break;
        case 4:
            console.log('Monday');
            break;
        case 5:
            console.log('Tuesday');
            break;
        case 6:
            console.log('Wednesday');
            break;
        case 7:
            console.log('Thursday');
            break;
        default:
            console.log('Invalid day number');
            break;
    }
}

dayOfWeek(3);


// Answer 116:
function season(month: number): void{
    switch(month){
        case 12:
        case 1:
        case 2:
            console.log('Winter');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Summer');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Spring');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Fall');
            break;
        default:
            console.log('Invalid month');
            break;
    }
}

season(6);


// Answer 117:
function defaultCase(grade: string): void{
    switch(grade){
        case 'A':
            console.log('Excellent');
            break;
        case 'B':
            console.log('Good');
            break;
        case 'C':
            console.log('Fair');
            break;
        case 'D':
            console.log('Poor');
            break;
        case 'F':
            console.log('Fail');
            break;
        default:
            console.log('Invalid grade.');
            break;
    }
}

defaultCase('B');
defaultCase('E');
