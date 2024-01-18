// no side effects
const array_ = [1, 2, 3];
function a_(arr) {
    const newArr = [].concat(arr);
    newArr.pop()
    return newArr
}
console.log(array_.map(item => item * 2));
console.log(a_(array_));
console.log(array_);


// side effects
const array = [1, 2, 3];
function a(arr) {
    arr.pop()
}
function b(arr) {
    arr.forEach(item => {
        arr.push(1);
    })
}
a(array);
b(array);
console.log(array) // [1, 2]

// same input --> same output
function num(num1, num2) {
    return num1 + num2
}
function num2(num) {
    return num * 2
}
// Referential Transparency. If I change this to 7, it will work, no effect on the program
console.log(num2(num(3, 4)))