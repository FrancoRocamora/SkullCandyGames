const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const {Genre} = require('../db')

const getAllGenres = async () => {
    const genresArray = []
    const addToBdd = []
    const response  = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    response.data.results.forEach(element => {
        addToBdd.push({name: element.name})
        genresArray.push(element.name)
    });
    const responsebdd = await Genre.bulkCreate(addToBdd)
    return genresArray
}


module.exports = getAllGenres