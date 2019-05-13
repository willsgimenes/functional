const double = x => x * 2;
const pointfreeDouble = arr => arr.map(double);

module.exports = {
    pointfreeDouble,
};
