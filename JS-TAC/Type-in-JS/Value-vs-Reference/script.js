// Pass by value
var a = 'a';
var b = a;
b = 'c';

console.log(a, b);

// Pass by reference

var num = [1, 2, 3];
var shallowCopy = [].concat(num);
var copyNum = num;
copyNum[0] = 2;
console.log(num, copyNum, shallowCopy);


// deepCopy
let obj = {
    a: 1,
    b: 2,
    c: {
        deep: '3'
    }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'c';
console.log(obj, clone, clone2, superClone)