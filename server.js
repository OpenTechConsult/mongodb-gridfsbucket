require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello the Web Dev");
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});