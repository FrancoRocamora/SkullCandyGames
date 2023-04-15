import { ADD_FAVORITE, REMOVE_FAVORITE, GET_INFO, GET_GENRES, ADD_FILTER, REMOVE_FILTER} from "./Actions"


const initialState = {
    gamesInfo: [],
    gamesGenres:[],
    myFavorites: [],
    filteredGames:[]
}


const Reducer = (state = initialState, action) =>{
        switch(action.type){
            case REMOVE_FILTER:
                return{...state, filteredGames: state.filteredGames.filter((game) => game.genre !== action.payload )}
            case ADD_FILTER: 
            return{...state, filteredGames: [...state.filteredGames, action.payload]}
            case GET_GENRES:
                return{...state, gamesGenres: [...state.gamesGenres, action.payload]}
            case GET_INFO:
                return {...state, gamesInfo: [...state.gamesInfo, action.payload]}
            case ADD_FAVORITE:
                return{...state, myFavorites: [...state.myFavorites, action.payload]}
            case REMOVE_FAVORITE:
                return{...state, myFavorites: state.myFavorites.filter((card) => card.id !== action.payload )}    
            default:
                return {...state}
            
    }   
}

export default Reducer