import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './ShowGames.module.css'
import Pagination from './Pagination'
import Game from './Game'
function ShowGames() {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(10)
    const totalGames = games[0]?.length;
    const lastIndex = currentPage * gamesPerPage
    const firstIndex = lastIndex - gamesPerPage
    const getInfo = () =>{
        axios.get('http://localhost:3001/videogames')
        .then(response => {
            setGames(oldGames => [...oldGames, response.data])
            setLoading(false)
        })
    }
    useEffect( () => {
        getInfo()
    },[])



    
    if(loading){
        return(
            <div className={styles.loading}><p>Loading...</p></div>
        )
    }

    return(
        <div>
        <div className={styles.gamesContainer}>
            {console.log(games)}
            {console.log(games.background_image)}
        {games[0].map(game => {
            return(
            <Game
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