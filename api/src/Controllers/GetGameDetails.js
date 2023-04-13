const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const {Videogame} = require('../db')
const  getGameDetails = async (id) => {
   if(id.length === 36) {
      const responseBDD = await Videogame.findByPk()
      return responseBDD
   }else {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      return response.data
   } 
}


module.exports = getGameDetails