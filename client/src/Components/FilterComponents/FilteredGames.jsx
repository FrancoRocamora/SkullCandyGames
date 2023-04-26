import Game from "../HomeComponents/Game"
import styles from './FilteredGames.module.css'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFilteredGames} from "../../Redux/Actions";
import FilterBar from "../HomeComponents/FilterBar";
import { useNavigate } from "react-router-dom";
import Pagination from '../HomeComponents/Pagination'
function FilteredGames(){
    const games = useSelector(initialState => initialState.gamesInfo)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const filteredGames = useSelector(initialState => initialState.filteredGames)
    const filter = useSelector(initialState => initialState.activeFilter)
   useEffect(()=> {
    games.forEach(game => {
        filter.forEach(genreName => {
            if(game.genres?.includes(genreName))
            if(filteredGames.includes(game)) {return} else {
                dispatch(addFilteredGames(game))
            }
        })
    }   
    )
    if(!filter.length)navigate('/home')
   }, [filter])

   const [loading, setLoading] = useState(true)
   const [currentPage, setCurrentPage] = useState(1)
   const [gamesPerPage, setGamesPerPage] = useState(6)
   const totalGames = filteredGames?.length;
   const lastIndex = currentPage * gamesPerPage
   const firstIndex = lastIndex - gamesPerPage

    return(
        <div className={styles.background}>
        <div className = {styles.gamesContainer}>
            <FilterBar></FilterBar>
       { (filteredGames.length) ? filteredGames.map(each => {
            return(
                <Game
                key={each.id}
                name = {each.name}
                rating = {each.rating}
                background_image = {each.background_image}/>
                )
            }).slice(firstIndex, lastIndex)
            : <h1 className={styles.empty}>Well, this is akward. Nothing to show here</h1>
            }
        </div>
        <div className={styles.pages}>
          <Pagination 
          gamesPerPage={gamesPerPage}
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          totalGames={totalGames}/>
          </div>
         </div>
    )

    }
export default FilteredGames;