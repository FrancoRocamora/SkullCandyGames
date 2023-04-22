import { useNavigate } from 'react-router-dom'
import styles from './Game.module.css'


function Game(props){
    const navigate = useNavigate()
    const getDetail = (id) => {
        navigate(`/game/${id}`)
    }
   
    return(
        <div className={styles.eachGame}>
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
                    <span className={styles.genresName}>{(typeof each ==='object') ? each.name : each}</span>
                )
            })}
            </div>
        </div>
    )
}


export default Game