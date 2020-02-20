const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    github_username: String,
    name: String,
    avatar_url: String,
    bio: String,
    repos: []
})

module.exports = mongoose.model('User', UserSchema)