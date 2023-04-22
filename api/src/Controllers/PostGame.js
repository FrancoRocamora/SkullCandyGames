const {Videogame, Genre} = require('../db')


const postGame = async ({name, description, genres, background_image, rating, developer, platforms, playtime, released, stores, tags}) => {
    const genreInfo = await Genre.findAll({where: {name: genres}})
   
    
    const newVideogame = await Videogame.create({"name": name, 
        "description": description, 
         "background_image": background_image, 
        "rating": rating, "developer": developer,
         "platforms": platforms, "playtime": playtime, 
         "released": released, "stores": stores, "tags": tags})
   await newVideogame.addGenres(genreInfo)
    return [newVideogame, genreInfo];
}


module.exports = postGame