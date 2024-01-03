// function a() {
//     var z = 1;
//     return z;
// }

// function a() {
//     var z = 2;
//     return z;
// }

// console.log(a());
// 2

var script1 = (function() {
    function a() {
        return 5;
    }
    return {
        a: a
    }
})();

function a() {
    return 10;
}
console.log(a());
console.log(script1.a());