function two() {
    var isValid; // undefined
    console.log(isValid)
}

function one() {
    var isValid = true; // local env
    two(); // new EC
    console.log(isValid)

}

var isValid = false;
one();
console.log(isValid)


// * output
// two() => undefined
// one() => true
// global() => false