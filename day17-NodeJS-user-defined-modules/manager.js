const { sumArray } = require("./teamA.js");
const { sum } = require("./teamB.js");

console.log("Y");
const values = [10, 20, 32, 41];
const ans = sumArray(values);
console.log("Z");

console.log(ans);

const t = sum(2, 3);
console.log(t);
console.log("END");
