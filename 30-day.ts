// Answer 88:
function roundDecimalNum(num: number): number{
    return Math.round(num);
}

console.log(roundDecimalNum(8.532));


// Answer 89:
function stringToNum(str: string): number{
    return parseFloat(str);
}

console.log(stringToNum('123'));
console.log(stringToNum('1.23'));


// Answer 90:
function valuechecking(value: any): boolean{
    return isNaN(value) ;
}

console.log(valuechecking('0.345'));
console.log(valuechecking('TypeScript'));
console.log(valuechecking(1234));
