const express = require('express');
const router = express.Router();

const Users = require('../models/userModel');

// Post a user endpoint
router.post('/postUser', async (req, res) => {
    const user = new Users({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const userDataToSave = await user.save();
        res.status(200).json(userDataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all user endpoint
router.get('/getAllUsers', async (req, res) => {
    try {
        const usersData = await Users.find();
        res.json(usersData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a user by its name endpoint
router.get('/getUserByName/:name', async (req, res) => {
    try {
        const userData = await Users.find({ name: { $regex: '.*' + req.params.name + '.*', $options: 'i' } }).exec();
        res.json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a user by its Id
router.get('/getUserById/:id', async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id);
        res.json(userData)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a user by its name endpoint
router.patch('/updateUserByName/:name', async (req, res) => {
    try {
        const userName = req.params.name;
        const updatedUser = req.body;
        const options = { new: true };
        const result = await Users.findOneAndUpdate(userName, updatedUser, options);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});


// Update a user by its Id endpoint
router.patch('/updateUserById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        const options = { new: true };
        const result = await Users.findByIdAndUpdate(id, updatedUser, options);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

// Delete a user by its Id endpoint
router.delete('/deleteUserById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await Users.findByIdAndDelete(id);
        res.send(`Document with name = ${userData.name} has been deleted..`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});


module.exports = router;