// Answer 112:
var countries = new Map();
countries.set('pakistan', 'USA, Nepal');
countries.set('Canada', 'Island');
countries.set('Japan', 'Tokyo');
console.log(countries);
// Answer 113:
function capitalOfcanada(countries) {
    if (countries.has('Canada')) {
        console.log("The capital of canada is ".concat(countries.get('Canada')));
    }
    else {
        console.log('Canada is not in the Map.');
    }
}
capitalOfcanada(countries);
// Answer 114:
var students = new Map();
students.set(1, 'Charlie');
students.set(2, 'Harsh');
students.set(3, 'David');
students.forEach(function (names, id) {
    console.log("Student's ID: ".concat(id, ", Name: ").concat(names));
});
