var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Answer 46:
var laptop = {
    'Make': 'hp',
    'Model': 'pentium-4',
    'year': 2020,
    'describe': function () {
        console.log("This laptop is made by ".concat(this.Make, " and model is ").concat(this.Model, " in the year of ").concat(this.year));
    }
};
laptop.describe();
// Answer 47:
var laptops = [{
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
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3.Model);
// Answer 48:
var laptop1_prices = [25000, 32000, 56000, 44000];
var laptop2_prices = [45000, 77000, 10000, 20000];
var combinePrice = __spreadArray(__spreadArray([], laptop1_prices, true), laptop2_prices, true).sort(function (a, b) { return a - b; });
console.log(combinePrice);
