// JS run time
// setTimeout(() => {console.log('1')}, 0);
// setTimeout(() => {console.log('2')}, 10);

// Promise.resolve('hi').then((data) => console.log('3' + data));

// console.log('4');

// Memory Heap
const a = 1;
const b = 10;
const c = 100;

// call stack
console.log('1');
console.log('2');
console.log('3');

// call stack
// console.log('three') -> remove first
// two() -> second
// one() - last
const one = () => {
    const two = () => {
        console.log('three')
    }
    two()
}
one();

