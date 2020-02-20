const axios = require('axios').default
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const { id } = req.params

        const response = await User.findById(id)

        return res.json(response)
    }
}