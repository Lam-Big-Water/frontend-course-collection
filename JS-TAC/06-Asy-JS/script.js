// JS run time => JS is a single threaded.
// setTimeout(() => {console.log('1')}, 0);
// setTimeout(() => {console.log('2')}, 10);

// Promise.resolve('hi').then((data) => console.log('3' + data));

// console.log('4');

// Memory Heap
// const a = 1;
// const b = 10;
// const c = 100;

// call stack
// console.log('1');
// console.log('2');
// console.log('3');

// call stack => first in, last out
// console.log('three') -> remove first
// two() -> second
// one() - last
// const one = () => {
//     const two = () => {
//         console.log('three')
//     }
//     two()
// }
// one();

// Recursion
// function foo() {
//     foo()
// }

// foo();

// -------------------------Promise

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');
//     } else {
//         reject('Error, it broke');
//     }
// })
// promise
// .then(result => result + ' catch it!')
// .then(result2 => console.log(result2));

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');
//     } else {
//         reject('Error, it broke');
//     }
// })

// // .catch can catch never errors may happen between the chains then
// promise
// .then(result => {
//     throw Error
//     result + ' catch it!'
// })
// .then(result2 => console.log(result2))
// .catch(() => console.log('Error'))

// const data1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, '1')
// })
// const data2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, '2')
// })
// const data3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, '3')
// })
// const data4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, '4')
// })

// Promise.all([data1, data2, data3, data4])
//     .then(values => {
//         console.log(values);
//     })

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json())
// })).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// }).catch(() => console.log('error'))

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json())
//     .then(console.log())
// // async await
// async function fetchUsers() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json();
//     console.log(data);
// }
// fetchUsers();

// finally
// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     // wrong
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// const getData = async function() {
//     try {
//         const [users, posts, albums] = await Promise.all(urls.map(url => 
//             fetch(url).then(resp => resp.json())
//         ))
//         console.log('users', users)
//         console.log('posts', posts)
//         console.log('albums', albums)
//     } catch (err) {
//         console.log('oh...', err)
//     }
    
// }

// getData().finally(() => console.log('done'))

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

// for await of
// const getData2 = async function() {
//     const arrayOfPromises = urls.map(url => fetch(url));
//     console.log(arrayOfPromises);
//     for await (let request of arrayOfPromises) {
//         const data = await request.json();
//         console.log(data);
//     }
// }

// getData2();

// Exercise
// 3 point => 1.parallel, 2.sequencies, 3.race
const promisify = (item, delay) =>
    new Promise((resolve) =>
        setTimeout(() => 
            resolve(item), delay));
const a = () => promisify('a', 100);
const b = () => promisify('b', 1000);
const c = () => promisify('c', 2000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1} ${output2} ${output3}`
}
parallel().then(console.log)


async function race() {
    const promises = [a(), b(), c()];
    const winner = await Promise.race(promises);
    return `the winner is ${winner}`
}
race().then(console.log)

async function sequencies() {
    const one = await c();
    const two = await a();
    const three = await b();
    return `parallel is done: ${one} ${two} ${three}`
}
sequencies().then(console.log)