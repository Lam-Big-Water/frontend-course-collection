var b = {
    name: 'jay',
    say() {console.log(this)}
}

//b.say(); // b => {name: 'jay', say: [Function]}

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}

//c.say()(); // c => [Function] => window

var d = {
    name: 'jay',
    say() {return () => console.log(this)}
}
// * Because the this keyword was lexically scoped inside of the ER function, it doesn't care about where it was called.
d.say()(); // d => [Function] => { name: 'jay', say: [Function: say] }

