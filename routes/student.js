const express = require('express');
const router = express.Router();

const StudentModel = require('../models/studentModel');

// Post a Student stub
router.post('/postStudent', async (req, res) => {
    const student = new StudentModel({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const studentDataToSave = await student.save();
        res.status(200).json(studentDataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all students stub
router.get('/getAllStudents', async (req, res) => {
    try {
        const studentData = await StudentModel.find();
        res.json(studentData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a student by name stub
router.get('/getStudentByName/:name', async (req, res) => {
    try {
        const studentData = await StudentModel.find({ name: { $regex: '.*' + req.params.name + '.*', $options: 'i' } }).exec();
        res.json(studentData);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// Get a student by Id stub
router.get('/getStudentById/:id', async (req, res) => {
    try {
        const studentData = await StudentModel.findById(req.params.id);
        res.status(200).json(studentData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update student by its name endpoint
router.patch('/updateStudentByName/:name', async (req, res) => {
    try {
        const studentName = req.params.name;
        const updatedStudent = req.body;
        const options = { new: true };
        const result = await StudentModel.findOneAndUpdate(studentName, updatedStudent, options);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// Update student by its Id stub
router.patch('/updateStudentById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedStudent = req.body;
        const options = { new: true };
        const result = await StudentModel.findByIdAndUpdate(id, updatedStudent, options);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

// Delete student by its Id stub
router.delete('/deleteStudentById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const studentData = await StudentModel.findByIdAndDelete(id);
        res.send(`Document with name = ${studentData.name} has been deleted...`)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;