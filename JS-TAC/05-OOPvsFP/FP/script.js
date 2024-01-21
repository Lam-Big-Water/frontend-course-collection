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

// * Idempotence
function notGood(num) {
    console.log(num)
}
// Todo: I always get five
notGood(5);

// * Imperative vs Declarative
// Todo: Imperative code is code that tells the machine what to do and how to do it
// Todo: Declarative code tells it what to do and what should happen, it doesn't tell the computer how to do thing

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
// }
// this is a lot more declarative
[1,2,3].forEach(item => console.log(item));

// Immutability
const obj = {name: 'Andrei'}
function clone(obj) {
    return {...obj} // this is pure
}
// but it still mutating the state
// obj.name = 'Nan';

function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nan'
    return obj2
}
const updateObj = updateName(obj);
console.log(obj, updateObj);

// HOF
const hof = (fn) => fn(5);
console.log(hof(function a(x){return x}))

// Closure
const closure = function() {
    let count = 55;
    return function getCounter() {
        return count;
    }
}

const getCounter = closure();
console.log(getCounter());

// * Currying
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// use curring => Function is going to remember the five
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);

// Todo: We only run this part of the function once `(b) => a * b`
console.log(curriedMultiplyBy5(3));
console.log(curriedMultiplyBy5(3));
console.log(curriedMultiplyBy5(3));

// Partial Application
const multiply2 = (a, b ,c) => a * b + c;
const partialMultiplyBy5 = multiply2.bind(null ,5);
console.log(partialMultiplyBy5(4, 10));

// MCI
function addTo80(n) {
    console.log('long time')
    return n + 80;
}

// let cache = {};
// function memoizedAddTo80(n) {
//     if (n in cache) {
//         return cache[n];
//     } else {
//         console.log('long time');
//         cache[n] = 5 + 80;
//         return cache[n];
//     }
// }
// console.log('1',memoizedAddTo80(5));
// console.log('2',memoizedAddTo80(5));

// MCI with Closure
// function memoizedAddTo80(n) {
//     let cache = {};
//     return function() {
//         if (n in cache) {
//             return cache[n];
//         } else {
//             console.log('long time');
//             cache[n] = 5 + 80;
//             return cache[n];
//         }
//     }
    
// }

// const memoized = memoizedAddTo80();
// console.log('1',memoized(5));
// console.log('2',memoized(5));

// Compose 
// data -> fn -> data --> fn ---> data
// const compose = (f, g) => (data) => f(g(data));

// const multiplyBy3 = (num) => num * 3;
// const makePositive = (num) => Math.abs(num);
// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
// console.log(multiplyBy3AndAbsolute(-20));

// fn1(fn2(fn3(50)));
// compose(fn1, fn2, fn3)(50)
// Pipe (fn3, fn2, fn1)(50)


// Amazon shopping project
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

/* 
Todo:
Implement a cart feature:
1. Add items to cart.
2. Add 3% tax to item in cart.
3. Buy item: cart --> purchases.
4. Empty cart
*/

const compose = (f, g) => (...args) => f(g(...args));

const amazonHistory = [];

console.log(
    purchasesItem(
        emptyCart,
        buyItem,
        applyTaxToItems,
        addItemToCart
    )(user, {name: 'laptop', price: 200}),
    amazonHistory
)

function purchasesItem(...fns) {
    return fns.reduce(compose);
}
function addItemToCart(user, item) {
    amazonHistory.push(user);
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updateCart})
}

function applyTaxToItems(user) {
    amazonHistory.push(user);
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, {cart: updatedCart})
}

function buyItem(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, {purchases: user.cart})
}

function emptyCart(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, {cart: []});
}