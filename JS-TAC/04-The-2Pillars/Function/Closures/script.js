function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return console.log(`${grandpa} > ${father} > ${son}`);
        }
    }
}

let one = a();
one()()

function boo(string) {
    return function(name) {
        return function(name2) {
            console.log(`${string} ${name} ${name2}`)
        }
    }
}

const arrow = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`);
// arrow('love song')('is my')('favorite song');
const arrowString = arrow('hi');
// 5 years => I can wait five years and hold on to information in memory doesn't get deleted and I can call it
const arrowStringName = arrowString();
arrowStringName();

// Exercise
function callMeMaybe() {
    const callMe = 'Hi! I am now here!';
    // The event loop pushes it back onto the stack, but by that time we already ran this function.
    setTimeout(function() {
        console.log(callMe, callMeLate);
    },1000);
    const callMeLate = 'Call me late!'
}
// * closures can make some of the functions go all the way, out to the Web API world,
// * they still use closures and we're able to remember this variable because of closures.
callMeMaybe();

// Memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill('1');
    console.log('create');
    return console.log(bigArray[index]);
}

heavyDuty(688);
heavyDuty(689);
heavyDuty(690);


const getHeavyDuty = heavyDuty2();

function heavyDuty2() {
    const bigArray = new Array(7000).fill('1');
    console.log('created Again!');
    return function(index) {
        return console.log(bigArray[index]);
    }
}

getHeavyDuty(688);
getHeavyDuty(689);
getHeavyDuty(690);

// Encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'Boom';
    }
    setInterval(passTime, 1000)
    return {
        totalPeaceTime: totalPeaceTime
    }
}
// const ohno = makeNuclearButton();
// ohno.totalPeaceTime();
// ohno.launch();



// Exercise
// Fix it the bug
// let view;
// function initialize() {
//     view = 'M';
//     console.log('view has been set!');
// }
// initialize();
// initialize();
// initialize();



let view;
function initialize() {
    let called = 0;
    return function() {
        if (called > 0) {
            return;
        } else {
            view = 'M';
            called++;
            console.log('view has been set!')
        }
    }
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();

