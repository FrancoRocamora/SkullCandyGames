import { ADD_FAVORITE, REMOVE_FAVORITE } from "./Actions"


const initialState = {
    myFavorites: [],
}


const Reducer = (state = initialState, action) =>{
        switch(action.type){
            case ADD_FAVORITE:
                return{...state, myFavorites: [...state.myFavorites, action.payload]}
            case REMOVE_FAVORITE:
                return{...state, myFavorites: state.myFavorites.filter((card) => card.id !== action.payload )}    
            default:
                return {...state}
            
    }   
}

export default Reducer