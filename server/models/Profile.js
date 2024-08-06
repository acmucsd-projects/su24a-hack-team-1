const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user_id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    resume: {
        type: String
    },
    website: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    biography: {
        type: String
    },
    state_abbrev: {
        type: String
    },
    city: {
        type: String
    },
    zip_code: {
        type: Number
    }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;