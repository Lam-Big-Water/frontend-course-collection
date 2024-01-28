const string = ['a', 'b', 'c'];

// push
string.push('d'); //O(1)

// pop
string.pop(); //O(1)

// unshift
string.unshift('x'); //O(n)

// splice
string.splice(2, 0, 'f'); //O(n)