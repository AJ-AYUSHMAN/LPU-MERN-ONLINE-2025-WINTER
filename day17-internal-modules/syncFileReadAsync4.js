const fsPromises = require("node:fs/promises");

console.log("START");

async function myReadFile() {
    try {
        console.log("--> Reading");
        const ans = await fsPromises.readFile("./dummy.txt", "utf-8");
        console.log("--> ans");
    } catch (err) {
        console.log("Error occurred in reading file:", err.message);
    }
}

myReadFile();
console.log("MIDDLE");
myReadFile();

console.log("END");
