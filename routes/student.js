const express = require('express');
const router = express.Router();

// Post a Student stub
router.post('/postStudent', (req, res) => {
    res.status(200).send('POST student endpoint');
});

// Get all students stub
router.get('/getAllStudents', (req, res) => {
    res.status(200).send('Get All students endpoint');
});

// Get a student by name stub
router.get('/getStudentByName/:name', (req, res) => {
    res.status(200).send('Get student by name endpoint');
});

// Get a student by Id stub
router.get('/getStudentById/:id', (req, res) => {
    res.status(200).send('Get student by Id endpoint');
});

// Update student by its name stub
router.patch('/updateStudentByName/:name', (req, res) => {
    res.send('Update a student by its name endpoint');
})

// Update student by its Id stub
router.patch('/updateStudentById/:id', (req, res) => {
    res.send('Update a student by its id endpoint');
});

// Delete student by its Id stub
router.delete('/deleteStudentById/:id', (req, res) => {
    res.send('Delete a student by its id endpoint');
})


module.exports = router;