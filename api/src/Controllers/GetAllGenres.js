const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const {Genre} = require('../db')

const getAllGenres = async () => {
    const genresArray = []
    const response  = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    response.data.results.forEach(genre => {
        genresArray.push(genre.name)
    })
    return genresArray
}


module.exports = getAllGenres