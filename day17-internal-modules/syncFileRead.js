const fs = require("node:fs");

// const ans = fs.readFileSync("./dummy.txt");
// --> is actually hexadecimal equivalent of the binary data
// (console does to avoid flooding :: random data in large quantity)

// const ans = fs.readFileSync("./dummy.txt", { encoding: "utf-8" });
const ans = fs.readFileSync("./dummy.txt", "utf-8");
console.log(ans);

// if you store a file and don't give extension
// --> OS :: does understand what to do... it will ask you, what is the type?
// BUT, everything on hard disk is BINARY
