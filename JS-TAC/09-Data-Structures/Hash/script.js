let user = {
    age: 30,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('Ohhh');
    }
}

user.age // O(1)
user.spell = 'Love Song'; // O(1)
user.scream(); // O(1) 

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
            console.log(hash);
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
        
    } //O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket);
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        } //O(1)
        return undefined
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apple', 99);
myHashTable.set('orange', 98);

console.log(myHashTable.get('grapes'), 
myHashTable.keys()
)

// this function it can't return the correct answer. 
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) return input[i]
        }
    }
    return undefined
} // O(n^2)
console.log('result ' + firstRecurringCharacter([2,1,1,2,3,3,5]));

function advance(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined
}
console.log('result ' + advance([2,1,1,2,3,3,5]));