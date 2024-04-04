// Answer 79:
var car = {
    make: "Toyota",
    model: "Alto",
    year: 2020,
};
console.log(car);
console.log(car.model);
// Answer 80:
var car1 = {
    make: "Toyota",
    model: "Alto",
    year: 2020,
};
car1.color = "grey";
car1.year = 2021;
console.log(car1);
console.log(car1.color);
// Answer 81:
function objectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
objectProperties({ make: 'Toyota', model: 'Alto', year: 2021, color: 'grey' });
