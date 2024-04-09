// Answer 106:
function leapYear(year: number): boolean{
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 );
}

console.log(leapYear(1988));
console.log(leapYear(2024));
console.log(leapYear(2015));


// Answer 107:
function divisibleByBoth(num: number): boolean{
    return (num % 2 === 0 && num % 3 === 0 && num % 6 === 0);
}

console.log(divisibleByBoth(8));
console.log(divisibleByBoth(12));


// Answer 108:
function stringComparison(value: string): boolean{
    let name = 'john';
    return (name === value.toLowerCase());
}

console.log(stringComparison('cerrie'));
console.log(stringComparison('john'));
console.log(stringComparison('JOHn'));
