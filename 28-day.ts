// Answer 82:
function stringLength(string: string): number{
    return string.length;
}

console.log('it contains', stringLength('Malia Raees'), 'charachters.');


// Answer 83:
function stringConversion(str: string){
    let upperCase = str.toUpperCase();
    let lowerCase = str.toLowerCase();

    console.log('upperCase:', upperCase);
    console.log('lowerCase:', lowerCase);
}    
    
stringConversion("cHarLie");


// Answer 84:
function wordReplace(sentence: string): string{
    return sentence.replace(/JavaScript/g, 'TypeScript');
}

console.log(wordReplace("I'm learning JavaScript.It's difficult but keep practicing will become JavaScript sensable."));
