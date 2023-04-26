import styles from './Error.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { getInfo, removeError} from '../../Redux/Actions'
import {useNavigate} from 'react-router-dom'
function Error(props) {

//Variables
    const dispatch = useDispatch()
    const error = useSelector(state => state.serverErrors)
    const navigate = useNavigate()

//Functions
    const goBack = () =>{
        dispatch(removeError())
        navigate('/home')
    }
//Return 
    return(
        <div className={styles.container}> 
            <h1 className={styles.text}>Oops, something went wrong: {error.message} :(</h1>
            <h2 className={styles.text}>Server responded with status: {error.response.status} </h2>
            <h2 className={styles.text}>{error.response.data.error}</h2>
            <button className={styles.button} onClick={goBack}>Game Over</button>
        </div>
    )
}

export default Error
