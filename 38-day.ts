// Answer 112:
const countries = new Map<string, string>();

countries.set('pakistan', 'USA, Nepal');
countries.set('Canada', 'Island');
countries.set('Japan', 'Tokyo');

console.log(countries);


// Answer 113:
function capitalOfcanada(countries: Map<string, string>): void{
    if (countries.has('Canada')){
        console.log(`The capital of canada is ${countries.get('Canada')}`);
    } else {
        console.log('Canada is not in the Map.');
    }
}

capitalOfcanada(countries);


// Answer 114:
const students = new Map<number, string>();

students.set(1, 'Charlie');
students.set(2, 'Harsh');
students.set(3, 'David');

students.forEach((names, id) =>{
    console.log(`Student's ID: ${id}, Name: ${names}`);
})
