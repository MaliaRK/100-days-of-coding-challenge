// Answer 109:
const currentTime = new Date().getHours();
if (currentTime < 12){
    console.log('Good Morning');
} else {
    console.log('Good Afternoon');
}


// Answer 110:
function grades(marks: number){
    if (marks >= 80){
        console.log("EXCELLENT! you got 'A+' grade." );
    } else if (marks >= 70){
        console.log("VERY GOOD! you got 'A' grade.");
    } else if (marks >= 60){
        console.log("GOOD! you got 'B' grade");
    } else if (marks >= 50){
        console.log("NEED TO IMPROVEMENT, you got 'C' grade. ");
    } else if (marks >= 40){
        console.log("you got 'D' grade.");
    } else if (marks >= 33){
        console.log("you got 'E' grade.");
    } else {
        console.log("FAIL");
    }
}

grades(56);
grades(25);
grades(93);


// Answer 111:
function ageGroup(age: number): string{
    if (age <= 12){
        return 'you are a child.';
    } else if (age <= 19){
        return 'you are a teenager.';
    } else {
        return 'you are an adult person.';
    }
}

console.log(ageGroup(27));
console.log(ageGroup(10));
console.log(ageGroup(13));
