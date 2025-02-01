const http = require("node:http");

const server = http.createServer((req, res) => {
    // console.log(req); // --> Shows a huge req object on screen
    // console.log(typeof req); // --> Object
    // console.log(Object.keys(req)); // --> Shows all the keys in req object
    console.log(req.url);
    res.end("hello 123");
});

server.listen(1101, () => {
    console.log("--------- Server Started ----------");
}); // guidelines says: 4 digit PORT number
