const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello the Web Dev");
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});