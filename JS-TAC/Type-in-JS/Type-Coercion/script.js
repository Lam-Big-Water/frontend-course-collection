console.log(1 == '1');
console.log(1 === '1');

if (1) {
    console.log(5);
}

if (0) {
    console.log(5);
}

console.log(-0 === +0);
console.log(Object.is(-0, +0))
// https://dorey.github.io/JavaScript-Equality-Table/