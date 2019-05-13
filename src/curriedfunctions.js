const curry = (fn, ...args) => (..._args) => fn(...args, ..._args);
const volume = (l, h, w) => l * h * w;

const hc = curry(volume, 100);
console.log(hc(200, 300));
console.log(hc(400, 500));
