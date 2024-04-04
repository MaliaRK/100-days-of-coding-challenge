// Answer 52:
let smartphone = {
    brand : 'samsung',
    model : 'Realme-C21',
    storage : {configuration :'8-28gb',
                screenSize : '2.5Inch'},
    batteryTiming : '48-hours'
};

console.log(smartphone);


// Answer 53:
let developerSkills = {
    languages : ['JavaScript','TypeScript','Python'],
    frameworks : ['React','Angular','Vue'],
    tools : ['Git','Webpack','Docker']
};

let {languages, frameworks, tools} = developerSkills

console.log(`languages: ${languages[0]}, frameworks: ${frameworks[1]}, tools: ${tools[2]}`);


// Answe 54:
function ObjectDynamicKey(key : string, value: string): object{
    let dynamicObject: any = {};
    dynamicObject[key] = value;
    return dynamicObject;
}

let UsersPreference = ObjectDynamicKey('vision', 'bright');
console.log(UsersPreference);
