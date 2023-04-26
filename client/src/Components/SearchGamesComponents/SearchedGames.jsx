import Game from "../HomeComponents/Game"
import styles from './SearchedGames.module.css'
import { useSelector } from "react-redux"
import {useState} from 'react'
import Pagination from '../HomeComponents/Pagination'
function SearchedGames(){
  //Vars and states
 const games = useSelector(initialState => initialState.searchResults)
 const [loading, setLoading] = useState(true)
 const [currentPage, setCurrentPage] = useState(1)
 const [gamesPerPage, setGamesPerPage] = useState(9)
 const totalGames = games?.length;
 const lastIndex = currentPage * gamesPerPage
 const firstIndex = lastIndex - gamesPerPage

    return(
      <div className={styles.container}>
        <div className={styles.gamesContainer}>
          {games?.map(game => {
            console.log(game)
            return (
                <Game 
                game={game}
                id={game.id}
                key={game.id}
                name={game.name}
                background_image={game.background_image}
                genres={game.genres}
                rating={game.rating}
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


export default SearchedGames