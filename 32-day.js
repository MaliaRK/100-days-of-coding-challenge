// Answer 94:
var words = ['Hello', 'world', 'JavaScript', 'TypeScript', 'Python'];
var lengths = words.map(function (words) { return words.length; });
console.log(words, '\n');
console.log('length of each word is:', lengths);
// Answer 95:
function greaterNumber(num) {
    return num.filter(function (num) { return num > 10; });
}
var numbers = [1, 7, 9, 15, 10, 6, 55, 34, 12];
console.log(numbers);
console.log('Numbers list greater than 10', greaterNumber(numbers));
// Answer 96:
function sumAll(num) {
    return num.reduce(function (accmulator, current) { return accmulator + current; }, 0);
}
var numbers1 = [5, 8, 3, 9, 2];
console.log('before sum:', numbers1);
console.log('After sum:', sumAll(numbers1));
