
// function weird() {
//     height = 50;
//     return height
// }

// console.log(weird());
// 50

// 'use strict'
// function strict_m() {
//     s_height = 50;
//     return s_height
// }

// console.log(strict_m());
// s_height is not defined

// var hey = function doodle() {
//     console.log(doodle)
//     return 'hey'
// }
// console.log(hey());
// hey

// doodle();
// doodle is not defined

// * Function Scope and Block Scope
// function a () {
//     var secret = '123'
// }
// console.log(secret);

// if (5 > 4) {
//     var num = '123';
//     const new_num = '234'
// }

// console.log(num);

function loop() {
    for (let i = 5; i < 5; i++) {
        console.log(i)
    }
    console.log(i)
}
loop()