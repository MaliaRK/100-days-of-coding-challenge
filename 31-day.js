// Answer 91:
var favFruits = ['Apple', 'Mango', 'Banana'];
console.log('initial list:', favFruits);
favFruits.push('Kiwi', 'Orange');
console.log('after addition:', favFruits);
// Answer 92:
function removeLastItem(arr) {
    return arr.pop();
}
var favFruits1 = ['Apple', 'Mango', 'Banana', 'Kiwi', 'Orange'];
console.log('initial list:', favFruits1);
console.log('deleted item:', removeLastItem(favFruits1));
console.log('after removing:', favFruits1);
// Answer 93:
function removeAndReplace(fruits) {
    var index = fruits.indexOf('Banana');
    if (index !== -1) {
        fruits[index] = 'Cherry';
    }
}
var favFruits2 = ['Apple', 'Mango', 'Banana'];
console.log('before replacing:', favFruits2);
removeAndReplace(favFruits2);
console.log('after replacing:', favFruits2);
