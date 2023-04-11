const {Videogame} = require('../db')


const postGame = async ({name, genres, release_Date, description, plataforms, image}) => {
    const newVideogame = await Videogame.create({name, genres, release_Date, description, plataforms, image})
    return newVideogame;
}


module.exports = postGame