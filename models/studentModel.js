const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentModelSchema = new schema({
    name: {
        type: String,
        required: [true, 'student name is required field']
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('StudentModel', studentModelSchema);
