const express = require("express");
const cors = require("cors");

app.use(cors());

const app = express();
const port = process.env.PORT || 3000;

const apiData = require("./data.jdon");

app.get("/", (req, res) => {
    res.send("Hello I am live");
});

app.get("/service", (req, res) => {
    res.send(apiData);
});

app.listen(port, () => {
    console.log("I am Live again");
});