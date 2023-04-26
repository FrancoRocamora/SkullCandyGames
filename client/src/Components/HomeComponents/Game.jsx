import { useNavigate } from 'react-router-dom'
import styles from './Game.module.css'
import { getGameById, addFavorite, removeFavorite } from "../../Redux/Actions"
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import favoriteOn from '../../Images/favorite.png'
import favoriteOff from '../../Images/love.png'
function Game(props){

    //Vars and states
    const favorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [favs, setFavs] = useState(false)


    //Functions
    const getDetail = (id) => {
        dispatch(getGameById(id))
        navigate(`/game/${id}`)
    }

    const handleFav = () => {
        if(favorites.includes(props.game)){
            dispatch(removeFavorite(props.id))
            setFavs(false)
        } else{
            dispatch(addFavorite(props.game))
            setFavs(true)
        }
    }
   
    return(
        <div className={styles.eachGame}>
            <button className={styles.favBtn} onClick={handleFav}><img className={styles.favs} src={(favorites.includes(props.game))? `${favoriteOn}` : `${favoriteOff}`} /></button>
            <a onClick={() => getDetail(props.id)}className={styles.gameName}>{props.name}</a>
            <img src={`${props?.background_image}`} className={styles.image}/>
            <p>Rating on metacritic: {props.rating}</p>
            <span>{props.developer}</span>
            <span>{props.stores}</span>
            <span>{props.released}</span>
            <span>{props.platforms}</span>
            <span> Genres: </span>
            <div className={styles.genresContainer}>
                {props.genres?.map(each => {
                    return(
                        <span key={each} className={styles.genresName}>{(typeof each ==='object') ? each.name : each}</span>
                    )
                })}
            </div>
        </div>
    )
}


export default Game