import styles from './Success.module.css'
import {useNavigate} from 'react-router-dom'
function Success () {
    //Vars
    const navigate = useNavigate()
    //Functions
    const goBack = () => {
        navigate('/home')
    }

    return(
        <div className={styles.container}>
            <h1 data-testid="favs-1" className={styles.header}> Yeey! you successfully added a new game!</h1>
            <button className={styles.button} data-testid='btn-1' onClick={goBack}>GoBack</button>
        </div>
    )
}


export default Success