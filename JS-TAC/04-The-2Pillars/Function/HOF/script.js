// ? How dry the code ?
// function letSamLogIn() {
//     console.log('1 second late...')
// }

// function letEvaLogIn() {
//     console.log('1 second late...')
// }
// letSamLogIn()
// letEvaLogIn()

// We now tell the function, what data to use.
// const giveAccessTo = (name) => console.log('Access Granted to ' + name);

// function letLogIn(user) {
//     return giveAccessTo(user)
// }

// letLogIn('Sam');
// letLogIn('Eva');

// ? How to dry the code
// const giveAccessToAdmin = (name) => console.log('Access Granted to ' + name);

// function letAdminLogIn(admin) {
//     let loading = [];
//     for (let i = 0; i < 10000000; i++) {
//         loading.push(i);
//     }
//     return giveAccessTo(admin)
// }
// letAdminLogIn('Boss');

// 


const giveAccessTo = (name) => console.log('Access Granted to ' + name)

function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return giveAccessTo(person.name);
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
        return fn(person);
    } else if (person.level === 'user') {
        return fn(person);
    }
    
}
function welCome(person) {
    console.log(person.name + ' Welcome!')
}
// letPerson({level: 'admin', name: 'Sam'}, authenticate);
letPerson({level: 'admin', name: 'Sam'}, welCome);

const multiplyBy = (num1) => (num2) => console.log(num1 * num2)
multiplyBy(4)(6)
