import Button from "./Button"
import styles from './BackgroundCss.module.css'
function Background(props){
    return(
        <div className={styles.Background}>
            <p className={styles.devName}>By: Franco Rocamora </p>
            <h1 className={styles.pageName}> SkullCandy Games </h1>
           <Button getStarted={props.getStarted}></Button>
        </div>
    )
}

export default Background