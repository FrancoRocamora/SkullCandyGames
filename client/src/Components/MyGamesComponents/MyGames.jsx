import styles from './MyGames.module.css'
import {useSelector} from 'react-redux'
import Game from '../HomeComponents/Game.jsx'
import { useNavigate } from 'react-router-dom';
function MyGames(){
    //Vars and states
    const navigate = useNavigate()
    const myGames = useSelector(state => state.myGames)

    return(
        <div className={styles.background}>
            <div className={styles.myGamesContainer}>
                <div className={styles.games}>
                    {(myGames.length) 
                    ? 
                    myGames.map(each => {
                        return(               
                        <Game
                         game={each}
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
                    }) 
                    : 
                    <h1 className={styles.empty}>You have no games here</h1>}
                </div>
            </div>
            <button 
            className={styles.button}onClick={()=>{navigate('/post')}}>Post new game</button>
        </div>
    )

}

export default MyGames