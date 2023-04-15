import Button from "./Button"
import styles from './BackgroundCss.module.css'
function Background(props){
    return(
        <div className={styles.Background}>
           <Button getStarted={props.getStarted}></Button>
        </div>
    )

}

export default Background