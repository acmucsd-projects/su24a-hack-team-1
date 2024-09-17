const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        default: '',
    },
    website: {
        type: String,
        default: '',

    },
    biography: {
        type: String,
        default: '',

    }
}, { timestamps: true });

const UserInfo = mongoose.model('User', userSchema);

module.exports = UserInfo;