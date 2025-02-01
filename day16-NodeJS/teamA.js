const { sum } = require("./teamB.js");

const sumArray = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = sum(total, arr[i]);
    }
    return total;
};

module.exports = {
    // key: value
    sumArray,
};
