// Answer 58:
function Average_Score(...scores : number[]): number{
    let total = scores.reduce((sum , score)=> sum + score);
    return total / scores.length;
}

console.log('Average Score is:', Average_Score(30,56,89,43));


// Answer 59:
function makeAdder(valueToAdd: number): (number: number)=> number{
    return function(number : number): number{
        return number + valueToAdd;
    };
}

let addFive = makeAdder(5);
console.log(addFive(10));


// Answer 60:
let userProfile = (function(){
    let name = 'Malia Raees';
    let FName = 'Raees khan';
    let age = 27;
    return {displayInfo: function(){
        console.log(`Name: ${name}, FatherName: ${FName}, Age: ${age}`);
    }
};
})();

userProfile.displayInfo();