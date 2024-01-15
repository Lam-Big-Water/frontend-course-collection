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