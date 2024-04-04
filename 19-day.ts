// Answer 55:
let numbers : number[] = [5,4,7,0,2,4];
let doubleNumber = numbers.map(number => number * 2);

console.log(numbers);
console.log(doubleNumber);


// Answer 56:
let mix_items: [string,number,boolean][any][] = [false, 'cake', 5,'brush', true, 'cat', 8];
let stringArray = mix_items.filter(items => typeof items === "string");

console.log(mix_items);
console.log(stringArray);


// Answer 57:
let grades: number[] = [50, 92, 43, 80, 44, 69];
let average_grade = grades.reduce((grade, total)=> grade + total, 0) / grades.length;

console.log(grades);
console.log(average_grade);