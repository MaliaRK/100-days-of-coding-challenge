// Answer 103:
// function randomBoolean(): boolean{
//     return Math.random() > 0.5;
// }
// console.log(randomBoolean());
// Answer 104:
// function randomHexadecimal(): string{
//     const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
//     return color;
// }
// console.log(randomHexadecimal());
// Answer 105:
function dice_roll() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(dice_roll());
