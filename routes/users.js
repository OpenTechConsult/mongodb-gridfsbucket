const express = require('express');
const router = express.Router();

// Post a user endpoint
router.post('/postUser', (req, res) => {
    res.send('Post user endpoint');
});

// Get all user endpoint
router.get('/getAllUsers', (req, res) => {
    res.send('Get all users endpoint');
});

// Get a user by it name endpoint
router.get('/getUserByName/:name', (req, res) => {
    res.send('Get a user by his name endpoint');
});

// Get a user by his Id endpoint
router.get('/getUserById/:id', (req, res) => {
    res.send('Get a user by its id endpoint');
});

// Update a user by its name endpoint
router.patch('/updateUserByName/:name', (req, res) => {
    res.send('Update a user by its name endpoint');
});


// Update a user by its Id endpoint
router.patch('/updateUserById/:id', (req, res) => {
    res.send('Get a user by its Id endpoint');
});

// Delete a user by its Id endpoint
router.delete('/deleteUserById/:id', (req, res) => {
    res.send('Delete a user by its Id endpoint');
});


module.exports = router;