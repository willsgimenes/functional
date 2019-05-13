const withCount = fn => (...args) => fn(...args);
const add = (x, y) => x + y;

const countAdd = withCount(add);

console.log(countAdd(1, 2));
console.log(countAdd(2, 3));
console.log(countAdd(3, 4));
console.log(countAdd(4, 5));
