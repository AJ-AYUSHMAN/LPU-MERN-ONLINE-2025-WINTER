const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    // DUMMY API :: to check if server is running...
    res.send(`<h1>Server is running on PORT : ${PORT}</h1>`);
});

app.get("/tasks", async (req, res) => {
    try {
        const text = await fsPromises.readFile("./db.json");
        const obj = JSON.parse(text);
        res.status(200);
        res.json({
            status: "success",
            data: {
                tasks: obj,
            },
        });
    } catch (err) {
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});

app.post("/tasks", async (req, res) => {
    try {
        // 1. you will get the data in request
        const newObj = req.body;
        console.log("newObj:", newObj);

        // 2. read the current list
        const text = await fsPromises.readFile("./db.json", "utf-8");
        const arr = JSON.parse(text);

        // 3. then append the new data into it
        arr.push(newObj);

        // 4. save the new list
        const textData = JSON.stringify(arr);
        await fsPromises.writeFile("./db.json", textData);

        res.status(201);
        res.json({
            status: "success",
        });
    } catch (err) {
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});

app.listen(PORT, () => {
    console.log(`
-------------------------------------------------
------- Server Started on PORT : ${PORT} --------
------- link: http://localhost:${PORT}/ ---------
-------------------------------------------------
`);
});
