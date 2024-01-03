var x = 'x'
function q() {
    console.log(x)
    var q = 'q'
    return w()
}

function w() {
    var w = 'w'
    return e()

}

function e() {
    var e = 'e'
    console.log(e)
    return 'e'
}

q();


function a() {
    var a = 'a'
    return function b() {
        var b = 'b'
        return function c() {
            var c = 'c'
            console.log(a);
        }
    }
}
a()()();