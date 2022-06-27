const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user name is required field']
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('UserModel', userModelSchema);
