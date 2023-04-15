import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux';
import { useState, useEffect } from 'react'
import styles from './ShowGames.module.css'
import FilterBar from './FilterBar';
import Pagination from './Pagination'
import Game from './Game'
import { addFilter } from '../../Redux/Actions';


function filterFunction (genre) {
    
}

function ShowGames() {
    const games = useSelector(initialState => initialState.gamesInfo)
    const filteredGames = useSelector(initialState => initialState.filteredGames)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(9)
    const [filter, setFilter] = useState(false)
    const totalGames = games[0]?.length;
    const lastIndex = currentPage * gamesPerPage
    const firstIndex = lastIndex - gamesPerPage
    const dispatch = useDispatch()
    useEffect(()=> {
        if(totalGames == 100)
        setLoading(false)
    },[games])
    
    
   
    
    if(loading){
        return(
            <div className={styles.loading}><p>Loading...</p></div>
        )
    }

    return(
        <div>
        <div className={styles.gamesContainer}>
       <FilterBar filterFunction={filterFunction}></FilterBar>
        {(filter) ?
        filteredGames.map(game => {
            <Game
            ket={game.id}
            name = {game.name}
            rating = {game.rating}
            background_image = {game.background_image}
        />
        })
        : games[0].map(game => {
            return(
            <Game
                ket={game.id}
                name = {game.name}
                rating = {game.rating}
                background_image = {game.background_image}
            />
            )    
        }).slice(firstIndex, lastIndex)}
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


export default ShowGames