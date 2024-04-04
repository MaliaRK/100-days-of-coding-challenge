// Answer 94:
const words: string[] = ['Hello','world','JavaScript','TypeScript','Python'];

const lengths: number[] = words.map(words => words.length)
console.log(words, '\n');
console.log('length of each word is:', lengths);


// Answer 95:
function greaterNumber(num: number[]): number[]{
    return  num.filter(num => num > 10); 
}

const numbers: number[] = [1, 7, 9, 15, 10, 6, 55, 34, 12];
console.log(numbers);

console.log('Numbers list greater than 10', greaterNumber(numbers));


// Answer 96:
function sumAll(num: number[]): number{
    return num.reduce((accmulator, current)=> accmulator + current, 0);
}

const numbers1: number[] = [5,8,3,9,2];
console.log('before sum:', numbers1);

console.log('After sum:', sumAll(numbers1));
