// Answer 46:
let laptop = {
    'Make': 'hp',
    'Model': 'pentium-4',
    'year': 2020,
    'describe': function(){
        console.log(`This laptop is made by ${this.Make} and model is ${this.Model} in the year of ${this.year}`);
    }
};
laptop.describe();


// Answer 47:
let laptops = [{
    'Make': 'hp',
    'Model': 'pentium-4',
    'year': 2020,
},
{
    'Make': 'windows',
    'Model': 'pentium-5',
    'year': 2023,   
},
{
    'Make': 'Mac',
    'Model': 'pentium-6',
    'year': 2022,
}];
let [laptop1, laptop2, laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3.Model);


// Answer 48:
let laptop1_prices  = [25000, 32000, 56000, 44000];
let laptop2_prices = [45000, 77000, 10000, 20000];

let combinePrice = [...laptop1_prices, ...laptop2_prices].sort((a,b) => a - b);
console.log(combinePrice);