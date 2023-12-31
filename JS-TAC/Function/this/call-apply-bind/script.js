// call(), apply(), bind()

function a() {
    console.log('hi')
}

a.call();
a.apply();
// shorthand => a();

const man = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

console.log(man.heal());

console.log('1', archer);
// man.heal.call(archer, 50, 30);

// apply() it takes an array of parameters
// man.heal.apply(archer, [50, 30]);

// bind() returns a new function with a certain context and parameters 
let healArcher = man.heal.bind(archer, 50, 30);
healArcher();
console.log('2', archer);

// function currying
function multiply(a, b) {
    return a * b
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(4));

// ! Context vs Scope
/*
Context is most often determined by how a function is invoked with the value of this keyword
and Scope refers to the visibility of variables
*/