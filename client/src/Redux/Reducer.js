import { ADD_FAVORITE, REMOVE_FAVORITE,
    GET_INFO, GET_GENRES,
    ADD_FILTER, REMOVE_FILTER,
    ADD_FILTERED_GAME, REMOVE_FILTERED_GAME,
    SORT_A_TO_Z, SORT_Z_TO_A,
    SORT_BY_RATING, GET_BY_ID, GET_SEARCH_RESULTS,
    GET_MY_GAMES, GET_SERVER_ERROR, REMOVE_SERVER_ERROR} from "./Actions"


const initialState = {
    gamesInfo: [],
    searchResults: [],
    gamesGenres:[],
    activeFilter: [],
    myFavorites: [],
    filteredGames:[],
    gameDetail: [],
    myGames:[],
    serverErrors: '',
}


const Reducer = (state = initialState, action) =>{
        switch(action.type){
            case GET_SERVER_ERROR:
                return {...state, serverErrors: action.payload}
            case REMOVE_SERVER_ERROR:
                return {...state, serverErrors: action.payload}
            case GET_MY_GAMES:
                return {...state, myGames:  action.payload}
            case GET_SEARCH_RESULTS: 
                return {...state, searchResults: action.payload}
            case GET_BY_ID: 
                return{...state, gameDetail: action.payload}
            case SORT_BY_RATING:
                return{...state, gamesInfo: action.payload(state.gamesInfo)}
            case SORT_Z_TO_A:
                return{...state, gamesInfo: action.payload(state.gamesInfo)}
            case SORT_A_TO_Z: 
                return{...state, gamesInfo: action.payload(state.gamesInfo)}
            case REMOVE_FILTERED_GAME: 
                return {...state, filteredGames: state.filteredGames.filter((each) => each.genres.includes(!action.payload) )}
            case ADD_FILTERED_GAME:
                return {...state, filteredGames:[ ...state.filteredGames, action.payload] }
            case REMOVE_FILTER:
                return{...state, activeFilter: state.activeFilter.filter((each) => each !== action.payload)}
            case ADD_FILTER: 
                return{...state, activeFilter: [...state.activeFilter, action.payload]}
            case GET_GENRES:
                return{...state, gamesGenres: [...state.gamesGenres, action.payload]}
            case GET_INFO:
                return {...state, gamesInfo:  action.payload}
            case ADD_FAVORITE:
                return{...state, myFavorites: [...state.myFavorites, action.payload]}
            case REMOVE_FAVORITE:
                return{...state, myFavorites: state.myFavorites.filter((game) => game.id !== action.payload )}    
            default:
                return {...state}           
    }   
}

export default Reducer