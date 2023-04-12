const Routes = require('express')
const GetAllGenres = require('../Controllers/GetAllGenres')
const genreRoutes = Routes()


genreRoutes.get('/', async (req, res) => {
   try {
    const response = await GetAllGenres()
    res.status(200).json(response)
   } catch (error) {
    res.status(400).json({error: error.message})
   }
})

module.exports = genreRoutes