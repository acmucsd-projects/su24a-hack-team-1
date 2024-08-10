const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectParticipantSchema = new Schema({
    project_id: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
}, { timestamps: true });

const ProjectParticipant = mongoose.model('ProjectParticipant', projectParticipantSchema);

module.exports = ProjectParticipant;