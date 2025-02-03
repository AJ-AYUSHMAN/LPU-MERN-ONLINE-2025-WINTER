const http = require("http");
const fsPromises = require("fs/promises");

const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}; // :: returns a promise
// :: which completes when the last line of that function executes
//    OR something is return
// :: the promises returns the data which is returned in the function

const getCardUI = (products) => {
    let finalHTML = ``;
    products.forEach((elem) => {
        finalHTML += `
        <div class='card'>
            <h4>${elem.title}</h4>
            <img src='${elem.thumbnail}' />
            <p>${elem.description}</p>
            <a href='/view?id=${elem.id}'>More...</a>
        </div>
        `;
    });
    return finalHTML;
};

const server = http.createServer(async (req, res) => {
    const url = req.url;
    const [path, query] = url.split("?");
    console.log("-->", path);
    res.setHeader("content-type", "text/html");

    if (path == "/") {
        const products = await getData();
        const cardsUiHTMLString = getCardUI(products);
        // using backtick, we can write multiline string in JS
        res.end(
            `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel='stylesheet' href='./styles1.css'>
</head>

<body>
    ${cardsUiHTMLString} 
</body>

</html>
`
        );
    } else if (path == "/about") {
        res.end("<h1 style='color: blue'>About Page</h1>");
    } else if (path == "/styles1.css") {
        res.setHeader("content-type", "text/css");
        const data = await fsPromises.readFile("./styles1.css");
        res.end(data);
    } else if (path === "/view") {
        const data = fetch("https://dummyjson.com/products/1");
        //......................... HOME WORK ...........
        res.end(`
            <h1>You are visiting ${query}</h1>
        `);
    } else {
        res.end("<h1 style='color: green'>Oops... Page Not Found!</h1>");
    }
});

server.listen(1010, () => {
    console.log("------ Server Started ------");
});

// write (multiple times & optional)
// end (only once & mandatory)
