// 1: Gives methods access to their object
// 2: Execute same code for multiple object

// const obj = {
//     name: "Sam",
//     sing() {
//         return 'lala ' + this.name
//     },
//     singAgain() {
//         return this.sing() + " again..."
//     }
// }
// console.log(obj.singAgain());


// let name = "Sam";


// function callMyName() {
//     console.log(this.name);
// }

// obj_name_1 = {
//     name: "Andrei",
//     sayMyName: callMyName
// }

// obj_name_2 = {
//     name: "Gooder",
//     sayMyName: callMyName
// }

// console.log(
//     callMyName(),
//     obj_name_1.sayMyName(),
//     obj_name_2.sayMyName()
// )

// const a = function() {
//     console.log('a', this)
//     const b = function() {
//         console.log('b', this)
//         const c = {
//             hi: function() {
//                 console.log('c', this);
//             }
//         }
//         c.hi()
//     }
//     b()
// }
// a()

// output 
// Window
// window
// { hi: [Function: hi] }


const obj = {
    name: 'Sam',
    sing: function() {
        console.log('a ' + this);
        var anotherFunc = function() {
            console.log('b ' + this);
        }
        anotherFunc()
    }
}
/*
Because the "this" keyword is not lexically scoped.
This is, it doesn't matter where it is run, it matters how the function was called.

We can use "arrow function" , "bind", create a reference

var anotherFunc = () => console.log('b ' + this);

return anotherFunc.bind(this);

var self = this;
var anotherFunc = function() {
    console.log(self)
}
return anotherFunc
*/

console.log(obj.sing());
// a => {name: 'Sam', sing: f}
// b => Window {...}