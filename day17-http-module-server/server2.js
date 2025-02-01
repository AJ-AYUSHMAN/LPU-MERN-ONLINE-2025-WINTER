const http = require("http");

const server = http.createServer((req, res) => {
    const path = req.url;
    console.log("-->", path);
    if (path == "/") {
        res.end("<h1 style='color: red'>HomePage</h1>");
    } else if (path == "/about") {
        res.end("<h1 style='color: blue'>About Page</h1>");
    } else {
        res.end("<h1 style='color: green'>Oops... Page Not Found!</h1>");
    }
});

server.listen(1010, () => {
    console.log("------ Server Started ------");
});

// we will use "nodemon" to avoid restarting the server manually
// install it globally: npm i -g nodemon
// to run any file    : npx nodemon <filename>
