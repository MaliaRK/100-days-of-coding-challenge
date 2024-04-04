// Answer 70:
// function numbersWithLet(){
//     for (let i = 1; i <= 5; i++){
//         console.log(i);
//     }}
// numbersWithLet();
// Answer 71:
// let MyName: string = "john";
// MyName = "Malia Raees";
// console.log(MyName);
// const MyAge: number = 25;
// try{
//     MyAge = 27;
// } catch (error){
//         console.log("Error: can't reassign 'MyAge' because it is a constant.");
//     }
// Answer 72:
{
    var blockLet = "visible inside the block";
    var blockConst = "also visible inside the block";
    console.log('blockLet is', blockLet);
    console.log('blockConst is', blockConst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("blockLet is not accessible outside the block.");
}
try {
    console.log(blockConst);
}
catch (error) {
    console.log("blockConst is also not accessible outside the block.");
}
