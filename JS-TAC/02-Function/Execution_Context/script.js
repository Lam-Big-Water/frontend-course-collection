function callMyName() {
    return 'Sam Lam'
}

function findMyName() {
    return callMyName()
}

function whatMyName() {
    return findMyName()
}

console.log(whatMyName())