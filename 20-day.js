// Answer 58:
function Average_Score() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; });
    return total / scores.length;
}
console.log('Average Score is:', Average_Score(30, 56, 89, 43));
// Answer 59:
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(5);
console.log(addFive(10));
// Answer 60:
var userProfile = (function () {
    var name = 'Malia Raees';
    var FName = 'Raees khan';
    var age = 27;
    return { displayInfo: function () {
            console.log("Name: ".concat(name, ", FatherName: ").concat(FName, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
