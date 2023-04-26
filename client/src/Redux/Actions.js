import axios from 'axios'

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_INFO = 'GET_INFO'
export const GET_GENRES = 'GET_GENRES'
export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const ADD_FILTERED_GAME= 'ADD_FILTERED_GAME'
export const REMOVE_FILTERED_GAME= 'REMOVE_FILTERED_GAME'
export const SORT_A_TO_Z='SORT_A_TO_Z'
export const SORT_Z_TO_A='SORT_Z_TO_A'
export const SORT_BY_RATING='SORT_BY_RATING'
export const GET_BY_ID='GET_BY_ID'
export const GET_SEARCH_RESULTS='GET_SEARCH_RESULTS'
export const GET_MY_GAMES = 'GET_MY_GAMES'
export const GET_SERVER_ERROR = 'GET_SERVER_ERROR'
export const REMOVE_SERVER_ERROR = 'REMOVE_SERVER_ERROR'


export const getError = (error) => {
    return{
        type: 'GET_SERVER_ERROR',
        payload: error
    }
}

export const removeError = () => {
    return{
        type: 'REMOVE_SERVER_ERROR',
        payload: ''
    }
}
 
export const getInfo =  () => {
   return dispatch => {
        axios.get('http://localhost:3001/videogames')
        .then(response =>
            {   
                dispatch({
                type: 'GET_INFO',
                payload: response.data
            })}
        )
   }
   
}

export const getMyGames =  () => {
    return dispatch => {
         axios.get('http://localhost:3001/videogames')
         .then(response =>{
             const filterResponse = response.data.filter(games => games.id.length=== 36)
             return  filterResponse}
         )
         .then(response => 
            { 
                
                dispatch({
                type: 'GET_MY_GAMES',
                payload: response
            })}
         )
    }
    
 }




export const sortByRating = () => {
    return{
        type: 'SORT_BY_RATING',
        payload: function sortBy(toOrder){
                toOrder.sort((a,b) => {
                if(a.rating < b.rating)return 1
                if(a.rating > b.rating) return -1
                if(a.rating === b.rating) return 0
            })
            return toOrder
        }
       }
}

export const addFilteredGames = (game) => {
    return{
        type: 'ADD_FILTERED_GAME',
        payload: game
    }
}

export const removeFilteredGames = (genre) => {
    return{
        type: 'REMOVE_FILTERED_GAME',
        payload: genre
    }
}

export const getGenres = () => {
    return dispatch => {
        axios.get('http://localhost:3001/genres')
        .then(response =>
            {   
                dispatch({
                type: 'GET_GENRES',
                payload: response.data
            })}
        )
   }
}

export const searchResults = (name) => {
    return dispatch => {
        axios.get(`http://localhost:3001/videogames/game?name=${name}`)
        .then(response =>
            {   
                console.log(name)
                dispatch({
                type: 'GET_SEARCH_RESULTS',
                payload: response.data
            })}
        )
   }
}




export const getGameById =(id) => {
    return dispatch => {
        axios.get(`http://localhost:3001/videogames/${id}`)
        .then(response =>
            {   dispatch({
                type: 'GET_BY_ID',
                payload: response.data
            })}
        )
   }
}

export const sortAtoZ = () => {
   return{
    type: 'SORT_A_TO_Z',
    payload: function sortBy(toOrder){
            toOrder.sort((a,b) => {
            if(a.name > b.name)return 1
            if(a.name < b.name) return -1
            if(a.name === b.name) return 0
        })
        return toOrder
    }
   }
}

export const sortZtoA = () => {
    return{
        type: 'SORT_Z_TO_A',
        payload: function sortBy(toOrder){
                toOrder.sort((a,b) => {
                if(a.name < b.name)return 1
                if(a.name > b.name) return -1
                if(a.name === b.name) return 0
            })
            return toOrder
        }
       }
}

export const addFilter = (genre) => {
    return{
        type: 'ADD_FILTER',
        payload: genre
    }
}

export const removeFilter = (genre) => {
    return{
        type: 'REMOVE_FILTER',
        payload: genre
    }
}


export const addFavorite = (game) =>{
    return{
        type: 'ADD_FAVORITE',
        payload: game
    }
}

export const removeFavorite = (id) => {
    return{
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}