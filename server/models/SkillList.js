const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillListSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    experience_level: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const SkillList = mongoose.model('SkillList', skillListSchema);

module.exports = SkillList;