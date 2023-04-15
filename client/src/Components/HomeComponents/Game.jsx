import styles from './Game.module.css'

function Game(props){

    return(
        <div className={styles.eachGame}>
            <p className={styles.gameName}>{props.name}</p>
            <img src={`${props?.background_image}`} className={styles.image}/>
            <p>{props.rating}</p>
        </div>
    )
}


export default Game