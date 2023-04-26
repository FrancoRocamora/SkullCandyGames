import styles from './SearchBar.module.css'
import { searchResults } from '../../Redux/Actions'
import { useDispatch} from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getMyGames} from '../../Redux/Actions'
function SearchBar(){
    //Vars and states
    const [search, setSearch] = useState('')
    const [current, setCurrent] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()  

    //Functions
    const searchSubmit = (event) => {
        event.preventDefault()
        dispatch(searchResults(search))
        navigate(`/name/${search}`)
        setSearch('')
    }

    const searchChange = (event) => {
        const value = event.target.value
        setSearch(value)
    }

    const goHome = () => {
        setCurrent('/home')
        navigate('/home')
    }

    const goFavs = () => {
        setCurrent('/favorites')
        navigate('/favorites')
    }
  
    function goMyGames(){
        dispatch(getMyGames())
        setCurrent('/myGames')
        navigate('/myGames')
    }
    return(
        <div className={styles.searchBar}>
            <button className={(current === '/home') ? styles.active : styles.button} onClick={goHome}>Home</button>
            <button className={(current === '/favorites') ? styles.active : styles.button} onClick={goFavs}>Favorites</button>
            <button className={(current === '/myGames') ? styles.active : styles.button} onClick={goMyGames}>My Games</button>
            <form className={styles.form}>
                <label htmlFor="search"></label>
                <input type='text' name='search' value={search} spellCheck={false} onChange={searchChange} className={styles.input}></input>
                <button type='submit' className={styles.buttonSubmit} onClick={searchSubmit}>Explore</button>
            </form>
        </div>
    )
}



export default SearchBar