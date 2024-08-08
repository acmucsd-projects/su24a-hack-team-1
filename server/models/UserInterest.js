const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInterestSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true
    },
    interest_level: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const UserInterest = mongoose.model('UserInterest', userInterestSchema);

module.exports = UserInterest;
