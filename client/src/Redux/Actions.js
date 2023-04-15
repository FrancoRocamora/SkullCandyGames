import axios from "axios";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_INFO = 'GET_INFO'
export const GET_GENRES = 'GET_GENRES'
export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'

export const getInfo =  () => {
   return dispatch => {
        axios.get('http://localhost:3001/videogames')
        .then(response =>
            {console.log(response.data)
                dispatch({
                type: 'GET_INFO',
                payload: response.data
            })}
        )
   }
   
}

export const getGenres = () => {
    return dispatch => {
        axios.get('http://localhost:3001/genres')
        .then(response =>
            {   dispatch({
                type: 'GET_GENRES',
                payload: response.data
            })}
        )
   }
}

export const addFilter = (game) => {
    return{
        type: 'ADD_FILTER',
        payload: game
    }
}

export const removeFitler = (genre) => {
    return{
        type: 'REMOVE_FILTER',
        payload: genre
    }
}


export const addFavorite = (character) =>{
    return{
        type: 'ADD_FAVORITE',
        payload: character
    }
}

export const removeFavorite = (id) => {
    return{
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}