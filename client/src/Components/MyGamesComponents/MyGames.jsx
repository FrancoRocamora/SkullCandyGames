import styles from './MyGames.module.css'
import {useSelector} from 'react-redux'
import Game from '../HomeComponents/Game.jsx'
import { useNavigate } from 'react-router-dom';
function MyGames(){
    const navigate = useNavigate()
    const myGames = useSelector(state => state.myGames)
console.log(myGames)
    return(
        <div className={styles.background}>
        <div className={styles.myGamesContainer}>
            <div className={styles.games}>
            {myGames.map(each => {
                return(               
                    <Game
                id={each.id}
                key={each.id}
                name = {each.name}
                rating = {each.rating}
                background_image = {each.background_image}
                genres={each.genres}
                stores={each.stores}
                released={each.released}
                platforms={each.platforms}
                    />
                )
            })}
            </div>
        </div>
         <button className={styles.button}onClick={()=>{
            navigate('/post')
          }}>Post new game</button>
          </div>
    )

}

export default MyGames