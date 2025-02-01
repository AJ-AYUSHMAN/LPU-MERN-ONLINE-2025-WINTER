const fsPromises = require("node:fs/promises");

console.log("START");

function myReadFile() {
    console.log("--> Reading");
    const pr = fsPromises.readFile("./dummy.txt", "utf-8");
    pr.then(() => {
        console.log("--> ans");
    }).catch((err) => {
        console.log("Error occurred in reading file:", err.message);
    });
}

myReadFile();
console.log("MIDDLE");
myReadFile();

console.log("END");
