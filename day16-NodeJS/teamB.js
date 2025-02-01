const sum = (a, b) => {
    console.log("---calculating sum---");
    return a + b;
};

const multiply = (a, b) => {
    console.log("---calculating product---");
    return a * b;
};

// container options in js?
// --> Array, Object :: object

module.exports = {
    // sum: sum, :: ES6+
    sum,
    mul: multiply,
};
