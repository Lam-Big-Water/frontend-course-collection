// * Function Expression
var canada = () => {
    console.log('cold')
}

// * Function Declaration
function india() {
    console.log(arguments)
    console.log('warm')
}

// canada();
india();
// * output:
// empty object => {}
// warm

function marry (p1, p2) {
    console.log(arguments)
    // * not a array
    console.log(`${arguments[0]} is marry to ${arguments[1]} now !`)

    console.log(Array.from(arguments))
    console.log(`${p1} is marry to ${p2} now !`)
}
marry('Soul', 'Fong');

// * Rest Parameters
function marry_new (...args) {
    console.log('new',arguments)
    console.log('I am a array', args)
    console.log(`${args[0]} is marry to ${args[1]} now !`)
}
marry_new('Soul', 'Fong');