const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const {Videogame} = require('../db')
const {Op} = require('sequelize')
const  getGamesByName = async (name) => {
   const response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
   const BddResponse = await Videogame.findAll({ where: {name: {[Op.iLike]: `%${name}%`}}})
   return [BddResponse, response.data.results]
}


module.exports = getGamesByName