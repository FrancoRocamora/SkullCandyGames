import styles from './SearchBar.module.css'

function SearchBar(){
    return(
        <div className={styles.searchBar}>
            <button className={styles.buttonHome}>Home</button>
            <button className={styles.buttonFavorites}>Favorites</button>
            <button className={styles.buttonMyGames}>My Games</button>
            <input type='text' className={styles.input}></input>
        </div>
    )
}



export default SearchBar