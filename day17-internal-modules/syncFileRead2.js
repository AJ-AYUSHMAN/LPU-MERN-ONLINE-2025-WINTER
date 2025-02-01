const fs = require("node:fs");

const start = Date.now();
console.log("---START----");

function myReadFile() {
    console.log("--> Reading");
    const ans = fs.readFileSync("./dummy.txt", "utf-8");
    console.log("--> ans");
}

myReadFile();
console.log("---MIDDLE---");
myReadFile();

const end = Date.now();
console.log("---END----", end - start);
