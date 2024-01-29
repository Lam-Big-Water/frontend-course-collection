const string = ['a', 'b', 'c'];

// push
string.push('d'); //O(1)

// pop
string.pop(); //O(1)

// unshift
string.unshift('x'); //O(n)

// splice
string.splice(2, 0, 'f'); //O(n)


// C++ Static
// int a[20];
// int b[5] {1,2,3,4,5};

// JS Dynamic
// const a = [];

// Implementing an Array
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

}

const newArray = new MyArray();
console.log(newArray.get(0));
console.log(newArray.push('a'));
console.log(newArray.push('b'));
console.log(newArray.delete(0));
// console.log(newArray.pop());
console.log(newArray);


// Exercise
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }

    const backward = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backward.push(str[i]);
    }
    console.log(backward);
    return backward.join('');
}

console.log(reverse('loveSong'));

// use built-in methods
function reverse2(str) {
    return str.split('').reverse().join('');
}
console.log(reverse2('Hall'));

// Not destruction
const data = 'this is important';
const reverse3 = str => [...str].reverse().join('');
console.log(reverse3(data));
console.log(data);