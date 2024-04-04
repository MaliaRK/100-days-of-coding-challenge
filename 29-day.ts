// Answer 85:
function findingPosition(sentence: string): number{
    return sentence.indexOf('code');
}

console.log(findingPosition("I'm doing coding & I love code with TypeScript."));


// Answer 86:
function textPresence(sentence: string): boolean{
    return sentence.includes('code');
}

console.log(textPresence("I'm doing coding & I love code with TypeScript."));


// Answer 87:
function extractSubstring(sentence: string):string {
    return sentence.substring(0,10);
}

console.log(extractSubstring("I'm doing coding & I love code with TypeScript."));
