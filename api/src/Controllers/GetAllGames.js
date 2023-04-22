const axios = require('axios')
const {Videogame, Genre} = require('../db')


require('dotenv').config()
const {API_KEY} = process.env
const  getAllGames = async () => {
      let finalResponse = []
      const responseBDD = await Videogame.findAll({
            include: {
            model: Genre,
            attributes: ['name'],
            through: {
                  attributes: []
            }}
            
      })
      
      const response = await Promise.all(
            [axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`), 
            axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`),
            axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`),
            axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`),
            axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
            ])
            response.forEach(each => {
                  each.data.results.forEach(game => {
                  finalResponse.push({name: game.name,
                  background_image: game.background_image,
                  rating: game.rating,
                  released: game.release,
                  id: game.id,
                  genres: game.genres.map(each => each.name)
                        })
                  })
            })
                  
            finalResponse = [...finalResponse, ...responseBDD]     
                                
      
      return finalResponse
     
}

module.exports = getAllGames