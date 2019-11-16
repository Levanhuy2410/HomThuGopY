const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Anonymous"
    },
    description: {
        type: String,
        required:true
    },
    status: {
        type: Boolean,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports =  mongoose.model('GopYCuaClient', PostSchema);
