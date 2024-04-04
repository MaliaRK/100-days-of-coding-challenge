// Answer 52:
var smartphone = {
    brand: 'samsung',
    model: 'Realme-C21',
    storage: { configuration: '8-28gb',
        screenSize: '2.5Inch' },
    batteryTiming: '48-hours'
};
console.log(smartphone);
// Answer 53:
var developerSkills = {
    languages: ['JavaScript', 'TypeScript', 'Python'],
    frameworks: ['React', 'Angular', 'Vue'],
    tools: ['Git', 'Webpack', 'Docker']
};
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
console.log("languages: ".concat(languages[0], ", frameworks: ").concat(frameworks[1], ", tools: ").concat(tools[2]));
// Answe 54:
function ObjectDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var UsersPreference = ObjectDynamicKey('vision', 'bright');
console.log(UsersPreference);
