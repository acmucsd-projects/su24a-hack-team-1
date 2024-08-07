const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project_id: {
        type: Number,
        required: true,
        unique: true
    },
    leader_id: {
        type: Number,
        required: true
    },
    title: {
        type: String
    },
    description: {
        type: String,
    },
    interest: {
        type: String,
    },
    spots: {
        type: Number
    },
    deadline: {
        type: Timestamp
    }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;