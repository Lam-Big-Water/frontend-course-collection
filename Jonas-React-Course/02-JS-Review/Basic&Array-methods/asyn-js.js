//  fetch('https://jsonplaceholder.typicode.com/todos')
//  .then((res) => res.json())
//  .then((data) => console.log(data));
// let res = await fetch('https://jsonplaceholder.typicode.com/todos');
// let data = await res.json();
// console.log(data);

async function getToDos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    let findID = data.filter((data) => data.id === 86);
    console.log(findID);
    return findID;
}

let i = getToDos();

console.log(i);