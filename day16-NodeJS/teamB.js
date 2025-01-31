function sum(a, b) {
    console.log("---calculating sum---");
    return a + b;
}

function multiply(a, b) {
    console.log("---calculating product---");
    return a * b;
}

// container options in js?
// --> Array, Object :: object
const container = {
    sum: sum,
    mul: multiply,
};

console.log("1", container);

module.exports = container;
