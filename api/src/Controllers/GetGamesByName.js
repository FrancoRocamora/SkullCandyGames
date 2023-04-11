const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const  getGamesByName = async (id) => {
   const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
   return response.data
}


module.exports = getGamesByName