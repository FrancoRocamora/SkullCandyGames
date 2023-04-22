import styles from './MainComponent.module.css'
import ShowGames from './ShowGames'


function MainComponent() {

    
    return( 
        <div className={styles.background}>
            <ShowGames></ShowGames>
        </div>
    )
}


export default MainComponent