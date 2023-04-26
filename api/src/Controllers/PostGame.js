const {Videogame, Genre} = require('../db')


const postGame = async ({name, description, genres, background_image, rating, developer, platforms, playtime, released, tags}) => {
    const genreInfo = await Genre.findAll({where: {name: genres}})
    const arrOfPlatForms = platforms.split(' ')
    const arrOfTags = tags.split(' ')
    const newVideogame = await Videogame.create({"name": name, 
        "description": description, 
         "background_image": background_image, "developer": developer,
         "platforms": arrOfPlatForms, "playtime": playtime, 
         "released": released, "tags": arrOfTags})
   await newVideogame.addGenres(genreInfo)
    return [newVideogame, genreInfo];
}


module.exports = postGame