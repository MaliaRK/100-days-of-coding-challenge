// Answer 82:
function stringLength(string) {
    return string.length;
}
console.log('it contains', stringLength('Malia Raees'), 'charachters.');
// Answer 83:
function stringConversion(str) {
    var upperCase = str.toUpperCase();
    var lowerCase = str.toLowerCase();
    console.log('upperCase:', upperCase);
    console.log('lowerCase:', lowerCase);
}
stringConversion("cHarLie");
// Answer 84:
function wordReplace(sentence) {
    return sentence.replace(/JavaScript/g, 'TypeScript');
}
console.log(wordReplace("I'm learning JavaScript.It's difficult but keep practicing will become JavaScript sensable."));
