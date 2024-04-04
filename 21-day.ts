// Answer 61:
enum vehicletype{
    car, truck, suzuki
};

console.log(vehicletype);
console.log(vehicletype[2]);
console.log(vehicletype.suzuki);


// Answer 62:
interface student{
    name: string;
    age?: number;
    corses: string[];
}

let studentData: student ={
    name: 'Malia Raees',
    age: 27,
    corses: ['TypeScript','Python']
};

console.log(studentData);


// Answer 63:
type Shape = {
    kind: string;
    radius?: number;
    width?: number;
    height?: number;
}

let shape1: Shape = {
    kind: 'Circle',
    radius: 7
}

let shape2: Shape = {
    kind: 'rectangle',
    width: 4,
    height: 8
}

console.log(shape1);
console.log(shape2);
