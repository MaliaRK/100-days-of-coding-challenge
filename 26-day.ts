// Answer 76:
function addition(num1: number, num2: number): number{
    return num1 + num2;
}

console.log(addition(7,4));


// Answer 77:
function greeetUser(name: string = "anonymous"){
    console.log(`Hello, ${name}.`);
}

greeetUser();
greeetUser('Eric');


// Answer 78:
function squareDeclaration(num : number): number{
    return num * num;
}

console.log(squareDeclaration(5));


const squareExpression = function(num: number): number{
    return num * num;
}

console.log(squareDeclaration(5));
