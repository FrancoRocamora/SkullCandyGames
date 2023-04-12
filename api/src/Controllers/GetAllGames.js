const axios = require('axios')
const {Videogame} = require('../db')


require('dotenv').config()
const {API_KEY} = process.env
const  getAllGames = async () => {
   const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
   const BddResponse = await Videogame.findAll()
   return [response.data.results, BddResponse]
}


module.exports = getAllGames