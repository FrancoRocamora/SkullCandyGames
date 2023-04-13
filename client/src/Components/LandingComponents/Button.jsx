import styles from './ButtonCss.module.css'
import {useNavigate }from 'react-router-dom'



function Button(){
    const navigate = useNavigate()
    const access = () => {
        navigate('/home')
    }

    return(
        <button className={styles.button} onClick={access}>Get started</button>
    )
}


export default Button