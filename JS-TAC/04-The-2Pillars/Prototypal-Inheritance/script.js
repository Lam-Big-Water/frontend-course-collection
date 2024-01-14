let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'kiki',
    fight() {
        return 1
    }
}

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard())

lizard.__proto__ = dragon;
// console.log(lizard.sing())
// console.log(lizard.fire)
// console.log(lizard.fight())
// console.log(dragon.isPrototypeOf(lizard))

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop)
    }
}

function multiplyBy5(num) {
    return console.log(num * 5)
}
multiplyBy5.__proto__
// f () {[native code]}
// multiplyBy5.__proto => 
// Function.prototype => Function.__proto__ => 
// Object.prototype => Object.__proto__ =>
// null

// example
const array = [];
array.hasOwnProperty('map'); // false
array.__proto__.hasOwnProperty('map') // true
// array.__proto__ => Array.prototype


// bad way __proto__ = 

// We can try this
let human = {
    mortal: true
}
let soCreates = Object.create(human);
console.log(soCreates.mortal); // true
soCreates.age = 75;
console.log(human.isPrototypeOf(soCreates)); // true

// ! Only functions have the prototype property


// Exercise - extend the functionality of a built in object
// #1
// Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
console.log(new Date().lastYear());


// #Bonus
// Modify . map() to print '🚞' at the end of each item.
Array.prototype.map = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🚞'))
    }
    return arr
}
console.log([1,2,3].map())


