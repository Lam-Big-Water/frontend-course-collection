// ! makes the program slower

// inline caching
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`;
};

const userData = {
    firstName: 'Jonson',
    lastName: 'Junior'
};

//* console.log(findUser(userData)); -> optimize -> 'found Jonson Junior'

// hidden classes
function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);
obj1.a = 30;

delete obj1.x;

console.log(obj1, obj2);

// !

// ! Memory Leak

// Global variable
var a = 1;
var b = 1;
var c = 1;

// Event Listeners
var element = document.getElementById('button');
element.addEventListener('click', onClick);

// setInterval
setInterval(() => {
    // referencing objects...
})

// !

// p22