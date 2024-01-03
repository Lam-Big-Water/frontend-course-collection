// * Functions are first class citizens in JS

// 1. Function can be assigned to variables and properties of objects.
var stuff = function() {}
// 2. We can also pass functions as arguments into a function.
function a(fn) {
    fn()
}
a(function() {console.log('hi there')})
// 3. We can return functions as values from other functions.
function b() {
    return function c() {console.log('bye')}
}
b()()
// or
var d = b();
d()