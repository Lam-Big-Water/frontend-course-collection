console.log('1---')
// * Hoisting => var teddy = undefined;
console.log(teddy); // undefined
// * Hoisting => function sing() {}
console.log(sing() + '2');
// * TypeError: sing2 is not a function
// console.log(sing2());
// * Hoisting => sing2 = undefined
console.log(sing2);


var teddy = 'bear';

// * function declaration
function sing() {
    console.log('Oh lala 1');
}
// * function expression
var sing2 = function () {
    console.log('Uh lala');
}
// output
/*
1---
undefined
Oh lala 1
undefined2
undefined
 */

// ? Exercise
one = undefined;
var one = 1;
var one = 2;
console.log(one);
// 2

function a () {
    console.log(1);
}
a();
// 2

function a () {
    console.log(2);
}

// ? Exercise 2
// * Hoisting => var favoriteFood = undefined;
// * Hoisting => var foodThoughts = undefined

var favoriteFood = 'grapes';

var foodThoughts = function () {
    // * Hoisting => var favoriteFood = undefined;
    console.log('I love ' + favoriteFood);

    var favoriteFood = 'sushi';
    console.log('New I love ' + favoriteFood);
}

foodThoughts()
// I love undefined
// New I love sushi