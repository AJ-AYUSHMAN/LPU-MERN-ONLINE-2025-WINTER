const fsPromises = require("node:fs/promises");

async function myReadFile() {
    console.log("--> Reading");
    const ans = await fsPromises.readFile("./dummy.txt", "utf-8");
    console.log("--> ans", ans);
}

myReadFile();
