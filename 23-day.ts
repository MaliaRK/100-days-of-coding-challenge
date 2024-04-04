// Answer 67:
function mixedType(num1: number, numberString: string): number {
    return num1 + Number(numberString)
}

console.log(mixedType(10, '40'));


// Answer 68:
function multiplyingDeci(num1: number, num2: number): number{
    return Math.round((num1 * num2) * 100) / 100;
}

console.log(multiplyingDeci(0.1, 0.2));


// Answer 69:
function divideAndRemainder(dividend: number, divisor: number): {quotient: number; remainder: number}{
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return {quotient, remainder}; 
}

console.log(divideAndRemainder(10,3));
