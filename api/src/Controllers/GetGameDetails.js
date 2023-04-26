const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const {Videogame, Genre} = require('../db')
const  getGameDetails = async (id) => {
   if(id.length === 36) {
      const responseBDD = await Videogame.findByPk(id, { include: {model: Genre,
         attributes: ['name'],
         through: {
               attributes: []
         }}})
      return responseBDD
   }else {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      const details = response.data
      return {
         name: details.name,
         description: details.description_raw,
         rating: details.metacritic,
         released: details.released,
         background_image: details.background_image,
         image_two: details.background_image.additional,
         rating: details.rating,
         playtime: details.playtime,
         platforms: details.platforms.map(each => each.platform.name),
         stores: details.stores.map(each => [each.store.name, each.store.image_background]),
         developer: details.developers.map(each => each.name),
         genres: details.genres.map(each => each.name),
         tags: details.tags.map(each => each.name)
      }
   } 
}


module.exports = getGameDetails