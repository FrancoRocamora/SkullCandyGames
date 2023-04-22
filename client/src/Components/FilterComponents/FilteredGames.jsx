import Game from "../HomeComponents/Game"
import styles from './FilteredGames.module.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFilteredGames} from "../../Redux/Actions";
import FilterBar from "../HomeComponents/FilterBar";
import { useNavigate } from "react-router-dom";
function FilteredGames(){
    const games = useSelector(initialState => initialState.gamesInfo)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const filteredGames = useSelector(initialState => initialState.filteredGames)
    const filter = useSelector(initialState => initialState.activeFilter)
   useEffect(()=> {
    console.log(filteredGames)
    games.forEach(game => {
        filter.forEach(genreName => {
            console.log(filter)
            if(game.genres?.includes(genreName))
            if(filteredGames.includes(game)) {return} else {
                dispatch(addFilteredGames(game))
            }
        })
    }   
    )
    if(!filter.length)navigate('/home')
   }, [filter])
    return(
        <div className = {styles.gamesContainer}>
            <FilterBar></FilterBar>
       { filteredGames.map(each => {
            return(
                <Game
                key={each.id}
                name = {each.name}
                rating = {each.rating}
                background_image = {each.background_image}/>
                )
            })
            }
        </div>
    )

    }
export default FilteredGames;