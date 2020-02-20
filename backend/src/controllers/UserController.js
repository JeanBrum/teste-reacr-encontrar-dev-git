const axios = require('axios').default
const User = require('../models/User')

module.exports = {
    async store(req, res) {

        const { github_username } = req.body

        let user = await User.findOne({ github_username })

        if(!user) {

            const response1 = await axios.get(`https://api.github.com/users/${github_username}`)
            const response2 = await axios.get(`https://api.github.com/users/${github_username}/repos`)

            const repos = []

            await response2.data.map(repo => {
                repos.push({
                    html_url: repo.html_url,
                    full_name: repo.full_name
                })
            })

            const { name = login, avatar_url, bio } = await response1.data

            user = await User.create({
                github_username,
                name,
                avatar_url,
                bio,
                repos
            })
    }
        
        return res.json(user)
    },

    async index(req, res) {
        const users = await User.find()
        
        return res.json(users)
    }
}