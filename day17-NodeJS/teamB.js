// this is your custom module - user defined module

console.log("A");

const sum = (a, b) => {
    console.log("E");
    return a + b;
};

console.log("B");

module.exports = {
    sum,
};
