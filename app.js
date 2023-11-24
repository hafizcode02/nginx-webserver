"use strict";
const express = require("express");

const PORT = 8000;
const HOST = "127.0.0.1";

const app = express();
app.get("/", (req, res) => {
    res.send("Hafiz Caniago\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);