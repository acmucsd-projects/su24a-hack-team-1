const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectParticipantSchema = new Schema({
    project_id: {
        type: Number,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    role: {
        type: String,
    },
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;