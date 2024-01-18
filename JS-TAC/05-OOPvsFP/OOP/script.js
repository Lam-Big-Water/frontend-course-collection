// Level 1: We're just constantly repeating ourselves.
// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon
//     }
// }

// const elf2 = {
//     name: 'Sally',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + elf.weapon
//     }
// }

// console.log(elf.attack())
// console.log(elf2.attack())

// Level 2: factory functions => So if we had a thousand users, that's a thousand attack function in different places. 
// function createElf(name, weapon) {
//     return {
//         name,
//         weapon,
//         attack() {
//             return 'attack with ' + weapon 
//         }
//     }
// }

// const peter = createElf('Peter', 'stones')
// console.log(peter.attack());
// const sam = createElf('Sam', 'fire')
// console.log(sam.attack());

// Improve
// const elfFunctions = {
//     attack() {
//         return 'attack with ' + this.weapon 
//     }
// }

// function createElf(name, weapon) {
//     return {
//         name,
//         weapon,
//     }
// }

// const peter = createElf('Peter', 'stones')
// peter.attack = elfFunctions.attack
// console.log(peter.attack());
// const sam = createElf('Sam', 'fire')
// sam.attack = elfFunctions.attack
// console.log(sam.attack());

// Improve by Object.create()
// const elfFunctions = {
//     attack() {
//         return 'attack with ' + this.weapon 
//     }
// }

// function createElf(name, weapon) {
//     let newElf = Object.create(elfFunctions)
//     console.log(newElf.__proto__);
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf
// }

// const peter = createElf('Peter', 'stones')
// console.log(peter.attack());
// const sam = createElf('Sam', 'fire')
// console.log(sam.attack());

// Constructor Functions
// function Elf(name, weapon) {
//     // console.log('this ', this); => {}
//     this.name = name;
//     this.weapon = weapon;
//     console.log('this ', this);

// }

// Elf.prototype.attack = function() {
//     return 'attack with ' + this.weapon
// }
// this can get very confusing
// Elf.prototype.build = function() {
//     let thisWhere = this
//     function building() {
//         return thisWhere.name + ' builds a house';
//     }
//     return building()
// }

// const peter = new Elf('Peter', 'stones')
// console.log(peter.attack());
// const sam = new Elf('Sam', 'fire');
// console.log(sam.attack())
// console.log(sam.build())

/*
'new' key word just like 

function Elf(name, weapon) {
    ..
    ...
}

Elf.prototype.attack = function() {
    return ...
}


const sam = new Elf('Sam', 'fire');
console.log(sam.__proto__)
*/


// Adding class
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}
const sam = new Elf('Sam', 'Fire')
console.log(sam instanceof Elf);
console.log(sam.attack());

// new binding this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Sam', 55);
console.log(person1);

// implicit binding
// * The `this` keyword will refer to the person that's implicit binding.
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log(this.name + this.age);
    }
}

// explicit binding
// const person3 = {
//     name: 'Karen',
//     age: 40,
//     hi: function() {
//         console.log('hi!' + this.setTimeout)
//     }.bind(window)
// }
// hi!function setTimeout() { [native code] }
// console.log(person3.hi())

// arrow function
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        var inner = () => {
            console.log('I am ' + this.name)
        }
        return inner()
    }
}
person4.hi()

// Inheritance
class Elf2 {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}
const fiona = new Elf2('Fiona', 'ninja stars');
const ogre = {...fiona};
console.log(ogre.__proto__);
// * So I've cloned the object, but Ogre no longer has Elf2 as the class
console.log(fiona.__proto__);
// * false, these object are not referencing the same place in memory, there are completely different
console.log(fiona === ogre);

// extends + super => It simply links up the prototype chain
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}
class Users extends Character {
    constructor(name, weapon, type) {
        // Call the super class => Character
        super(name, weapon);
        console.log(this);
        this.type = type;
    }
    attack(word) {
        return 'BOOM!!' + word
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'Strong fort in the world made';
    }
}

const SamLam = new Users('SamLam', 'GM', 'man');
console.log(SamLam)
console.log(SamLam.attack('You are diet man'))
const shrek = new Ogre('Shrek', 'club', 'green');
console.log(shrek);
console.log(shrek.makeFort());
// * It extends all the way up
console.log(shrek instanceof Users);
console.log(shrek instanceof Ogre);
console.log(shrek instanceof Character);