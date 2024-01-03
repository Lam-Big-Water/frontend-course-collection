// !different => That we initialize the function just once.

function a() {
    console.log('2');
}

for (let i = 0; i < 5; i++) {
    a();
}

for (let i = 0; i < 5; i++) {
    function a() {
        console.log('1');
    }

    a();
}

// ! different => a param to a function, it adds it automatically to our variable env, as if we just declared.


function e(param) {
    return param
}
e()

function e() {
    return param
}
e()
