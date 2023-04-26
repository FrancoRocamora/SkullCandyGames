import styles from './Favorites.module.css'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import Game from '../HomeComponents/Game'
import Pagination from '../HomeComponents/Pagination'
function Favorites(){

    // Variables and states
    const games = useSelector(state => state.myFavorites)
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(6)
    const totalGames = games?.length;
    const lastIndex = currentPage * gamesPerPage
    const firstIndex = lastIndex - gamesPerPage
  


    return(
        <div className={styles.background}>
            <div className={styles.gamesContainer}>
            { games?.map(game => {
            return(
            <Game
                game={game}
                id={game.id}
                key={game.id}
                name = {game.name}
                rating = {game.rating}
                background_image = {game.background_image}
                genres={game.genres}
            />
            )    
        }).slice(firstIndex, lastIndex)}
            </div>
            
        {(games.length) ? <Pagination 
        gamesPerPage={gamesPerPage}
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        totalGames={totalGames}/>
        : <h1 className={styles.emptyFavs}>Nothing to see here!</h1> }
         
        </div>
    )
}

export default Favorites