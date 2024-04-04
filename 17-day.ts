// Answer 49:
function hobby(...hobbies: string[]){
    hobbies.forEach((hobby : string)=>{
        console.log(`I enjoy ${hobby} hobby.`);  
    });
}

hobby('eating','reading','learning');


// Answer 50:
let MyIdealDay : string = `My ideal day would involve:
1. waking up early and going to park.
2. working on excited project like coding.
3. Going somewhere with family.`

console.log(MyIdealDay);


// Answer 51:
// original function
function CalculatedArea(width: number, height:number){
    return width * height;
}
let Area = CalculatedArea(4,7);
console.log('Area of Rectangle is :', Area);


// Refactored into an arrow function
let CalculatedAreaArow = (width : number, height: number): number => width * height;
console.log('Area of Rectangle is :' , CalculatedAreaArow(5,8));
