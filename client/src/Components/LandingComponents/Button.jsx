import styles from './ButtonCss.module.css'
import {useNavigate }from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getInfo, getGenres } from '../../Redux/Actions';

function Button(props){
    //Vars
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //Functions
    const access = () => {
        props.getStarted()
        dispatch(getInfo())
        dispatch(getGenres())
        navigate('/home')
    }

    return(
        <button className={styles.button} onClick={access}>Get started</button>
    )
}


export default Button