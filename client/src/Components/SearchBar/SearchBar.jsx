import styles from './SearchBar.module.css'

function SearchBar(){
    return(
        <div className={styles.searchBar}>
            <button className={styles.button}>Home</button>
            <button className={styles.button}>Favorites</button>
            <button className={styles.button}>My Games</button>
            <input type='text' spellCheck={false} className={styles.input}></input>
        </div>
    )
}



export default SearchBar