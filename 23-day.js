// Answer 67:
function mixedType(num1, numberString) {
    return num1 + Number(numberString);
}
console.log(mixedType(10, '40'));
// Answer 68:
function multiplyingDeci(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyingDeci(0.1, 0.2));
// Answer 69:
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(10, 3));
