// Answer 79:
let car = {
    make: "Toyota",
    model: "Alto",
    year: 2020, 
}

console.log(car);
console.log(car.model);


// Answer 80:
let car1: any = {
    make: "Toyota",
    model: "Alto",
    year: 2020, 
}

car1.color = "grey";
car1.year = 2021;

console.log(car1);
console.log(car1.color);


// Answer 81:
function objectProperties<T>(obj: T){
    for (let property in obj){
        console.log(`${property}: ${obj[property]}`);
    }
}

objectProperties({ make: 'Toyota', model: 'Alto', year: 2021, color: 'grey' })
