// Answer 73:
function AssignAndUpdate(){
    let MyName = "john";
    console.log(MyName, 'is initial value.');

    MyName = "Malia Raees";
    console.log(MyName, 'is reassign & updated value');
 }

 AssignAndUpdate();


//  Answer 74:
function swapping(){
    let a = 5;
    let b = 10
    console.log('before swapping:\na = ', a, '\nb = ', b, '\n');

    let temp = a;
    a = b;
    b = temp;
    console.log('After swapping:\na =', a, '\nb =', b);
}

swapping();


// Answer 75:
function compoundOperators(){
    let x = 4;
    console.log('Initial value:', x);

    x += 2;
    console.log('After addition:', x);

    x -= 1;
    console.log('After subtraction:', x);

    x *= 3;
    console.log('After multiplication:', x);

    x /= 2;
    console.log('After division:', x);
}

compoundOperators();
