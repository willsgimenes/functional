const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

console.log(repeat(exclaim(scream('I love music'))));


// math like composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const suki = compose(repeat, exclaim, scream);
console.log(suki('I love music'));


// ramda + lodash fp composition approach aka pipe
const pipe = (...fns) => x => fns.reduce((fn, acc) => acc(fn), x);
const pipedSuki = pipe(scream, exclaim, repeat);
console.log(pipedSuki('I love music'));


