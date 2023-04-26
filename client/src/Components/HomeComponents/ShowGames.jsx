import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux';
import { useState, useEffect } from 'react'
import styles from './ShowGames.module.css'
import FilterBar from './FilterBar';
import Pagination from './Pagination'
import Game from './Game'
import Loading from '../LoadingComponent/Loading.jsx'
import { useNavigate } from 'react-router-dom';
import { sortAtoZ, sortZtoA, sortByRating, getInfo } from '../../Redux/Actions';



function ShowGames(props) {

  
    //Vars and states
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const games = useSelector(initialState => initialState.gamesInfo)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(9)
    const totalGames = games?.length;
    const lastIndex = currentPage * gamesPerPage
    const firstIndex = lastIndex - gamesPerPage
  

    //Functions
    const sortFromA = () => {
        dispatch(sortAtoZ())
        navigate('/home')
    }
    
    const sortFromZ = () => {
        dispatch(sortZtoA())
        navigate('/home')
    }   

    const sortByRate = () => {
        dispatch(sortByRating())
        navigate('/home')
    }
    
    useEffect(()=> {
        if(games.length >= 100) setLoading(false)
    },[games])

    //Render
    if(loading){
        return(
            <Loading/>
        )
    }
    
    return(
        <div className={styles.gamesContainer}>
            <FilterBar></FilterBar>
            <div className={styles.sorts}>
                <button className={styles.button} onClick={() => {sortFromA()}}>Sort A to Z</button>
                <button className={styles.button} onClick={() => {sortFromZ()}}>Sort Z to A</button>
                <button className={styles.button} onClick={() => {sortByRate()}}>Sort by rating</button>
            </div>
        {games?.map(game => {
            return(
                <Game
                    game={game}
                    id={game.id}
                    key={game.id}
                    name = {game.name}
                    rating = {game.rating}
                    background_image = {game.background_image}
                    genres={game.genres}
                />)    
            }).slice(firstIndex, lastIndex)}
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