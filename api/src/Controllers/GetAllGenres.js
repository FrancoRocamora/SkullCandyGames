const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const {Genre} = require('../db')

const getAllGenres = async () => {
    const response  = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const responseDb = await Genre.findAll()
    return [response.data.results, responseDb]
}


module.exports = getAllGenres