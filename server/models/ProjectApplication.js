const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectApplicationSchema = new Schema({
    application_id: {
        type: Number,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
        required: true
    },
    project_id: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
    },
    reviewed_at: {
        type: Timestamp
    },
    description: {
        type: String
    }
}, { timestamps: true });

const ProjectApplication = mongoose.model('ProjectApplication', projectApplicationSchema);

module.exports = ProjectApplication;