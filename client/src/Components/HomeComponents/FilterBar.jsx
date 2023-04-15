import { useSelector } from "react-redux"
import styles from './FilterBar.module.css'
function FilterBar({filterFunction}){
    const genres = useSelector(initialState => initialState.gamesGenres)
    const item = genres[0].map((genre) =>{
       return(<li className={styles.li} key={genre}>
            <a onClick={filterFunction({genre})}>{genre}
            </a>
        </li>)
    }) 
    return(
        <nav className={styles.nav}>
            <ul className={styles.genresBar}>
                {item}
            </ul>
        </nav>
    )
}

export default FilterBar