const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const {Videogame, Genre} = require('../db')
const {Op} = require('sequelize')
const  getGamesByName = async (name) => {
   const finalResponse = []
   const response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
   const BddResponse = await Videogame.findAll({include: {model: Genre,
      attributes: ['name'],
      through: {
            attributes: []
      }}}, {where: {name: {[Op.iLike]: `%${name}%`}}})
   response.data.results.forEach(each => {
       finalResponse.push({name: each.name,
       background_image: each.background_image,
       rating: each.rating,
       released: each.release,
       id: each.id,
       genres: each.genres.map(each => each.name)
      })
 }
 )
   return [BddResponse, finalResponse].flat()
}


module.exports = getGamesByName