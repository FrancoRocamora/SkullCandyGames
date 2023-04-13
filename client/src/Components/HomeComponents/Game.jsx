import styles from './Game.module.css'

function Game(props){

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.rating}</p>
            <img src={`${props?.background_image}`} className={styles.image}/>
        </div>
    )
}


export default Game