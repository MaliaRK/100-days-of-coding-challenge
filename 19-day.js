// Answer 55:
var numbers = [5, 4, 7, 0, 2, 4];
var doubleNumber = numbers.map(function (number) { return number * 2; });
console.log(numbers);
console.log(doubleNumber);
// Answer 56:
var mix_items = [false, 'cake', 5, 'brush', true, 'cat', 8];
var strindArray = mix_items.filter(function (items) { return typeof items === "string"; });
console.log(mix_items);
console.log(strindArray);
// Answer 57:
var grades = [50, 92, 43, 80, 44, 69];
var average_grade = grades.reduce(function (grade, total) { return grade + total; }, 0) / grades.length;
console.log(grades);
console.log(average_grade);
