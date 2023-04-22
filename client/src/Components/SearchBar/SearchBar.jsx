import styles from './SearchBar.module.css'
import { searchResults } from '../../Redux/Actions'
import { useDispatch} from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getMyGames} from '../../Redux/Actions'
function SearchBar(){
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()  
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

        navigate('/home')
    }

    const goFavs = () => {
        navigate('/favorites')
    }
  
    function goMyGames(){
        dispatch(getMyGames())
        navigate('/myGames')
            
    }
    return(
        <div className={styles.searchBar}>
            <button className={styles.button} onClick={goHome}>Home</button>
            <button className={styles.button} onClick={goFavs}>Favorites</button>
            <button className={styles.button} onClick={goMyGames}>My Games</button>
            <form className={styles.form}>
            <label htmlFor="search"></label>
            <input type='text' name='search' value={search} spellCheck={false} onChange={searchChange} className={styles.input}></input>
            <button type='submit' className={styles.buttonSubmit} onClick={searchSubmit}>Explore</button>
            </form>
            
        </div>
    )
}



export default SearchBar