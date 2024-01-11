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
console.log(lizard.sing())
console.log(lizard.fire)
console.log(lizard.fight())
console.log(dragon.isPrototypeOf(lizard))