require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const studentRouter = require('./routes/student');
const usersRouter = require('./routes/users');
const gridfsRouter = require('./routes/gridfs');
const fileUpload = require('express-fileupload');

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
app.use(fileUpload());
app.use(express.json());

app.use('/api', indexRouter);
app.use('/api', studentRouter);
app.use('/api', usersRouter);
app.use('/api', gridfsRouter);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});