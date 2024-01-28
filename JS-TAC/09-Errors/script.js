// stop and throw get outside
// throw new Error
// console.log(4 + 3);

// const myError = new Error('some problem!');
// console.log(
//     myError.name,
//     myError.message,
//     myError.stack
// )

// stack
// function a() {
//     const b = new Error('What??');
//     return b
// }
// console.log(a().stack)

// Try Catch

// function fail() {
//     try {
//         throw new Error('some problem');
//         console.log('this works');
//     } catch(e) {
//         console.log('it does not work', e);
//     } finally {
//         console.log('keep going');
//         return 'returning fail'
//     }
//     console.log('never going');
// }

// fail();

// can catch the something();
// try {
//     try {
//         something();
//     } catch(e) {
//         throw new Error(e)
//     }
// } catch(e) {
//     console.log('got it', e);
// }

// catch doesn't catch it because this code is asynchronous.
// try {
//     setTimeout(function() {
//         fakeVariable;
//     }, 1000)
// } catch (e) {
//     console.log('got it', e)
// }

// .catch
// Promise.resolve('asyncFail')
//     .then(response => {
//         throw new Error('#1 fail')
//         return response
//     })
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         console.log(err);
//         return err
//     })
//     .then(response => {
//         console.log('Got it', response)
//     })
//     // So unless we throw a new error, it's not going to get caught
//     .catch(err => {
//         console.log('again?')
//     })

    // Promise.resolve('asyncFail')
    //     .then(response => {
    //         Promise.resolve().then(() => {
    //             throw new Error('#3 fail')
    //         }).catch(console.log)
    //         return 5
    //     })
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(err => {
    //         console.log('final error?', err)
    //     })

// catch error in async&await
async function a() {
    try {
        await Promise.reject('Oh')
    } catch (err) {
        console.log(err)
    }

    console.log('is this still good?')
}
a();

// Extending Error
class authenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'authenticationError';
        this.favoriteSnack = 'Grapes';
    }
}

const my = new authenticationError('My');
console.log(my.favoriteSnack);