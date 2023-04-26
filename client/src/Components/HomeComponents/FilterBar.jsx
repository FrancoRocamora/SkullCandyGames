import { useSelector, useDispatch } from "react-redux"
import styles from './FilterBar.module.css'
import { addFilter, removeFilter, removeFilteredGames } from "../../Redux/Actions"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Action from '../../Images/ActionIcon.png'
import Adventure from '../../Images/AdventureIcon.png'
import Arcade from '../../Images/ArcadeIcon.png'
import Board from '../../Images/BoardIcon.png'
import Card from '../../Images/CardGamesIcon.png'
import Casual from '../../Images/CasualIcon.png'
import Education from '../../Images/EducationIcon.png'
import Family from '../../Images/FamilyIcon.png'
import Fight from '../../Images/FightingIcon.png'
import Indie from '../../Images/IndieIcon.png'
import Multiplayer from '../../Images/MultiplayerIcon.png'
import Plataformer from '../../Images/PlatafromerIcon.png'
import Puzzle from '../../Images/PuzzleIcon.png'
import Racing from '../../Images/RacingIcon.png'
import Rpg from '../../Images/RpgIcon.png'
import Shooter from '../../Images/ShooterIcon.png'
import Simulation from '../../Images/SimulationIcon.png'
import Sports from '../../Images/SportsIcon.png'
import Strategy from '../../Images/StrategyIcon.png'

function FilterBar(){
    //Vars and states
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const activeFilter = useSelector(initialState => initialState.activeFilter)
    const arrayOfIcons = [
        Action, Adventure, Arcade,
        Board, Card, Casual, Education, Family, Fight, Indie, Multiplayer, Plataformer,
        Puzzle, Rpg, Racing, Shooter, Simulation, Sports, Strategy
        ]
    const genres = useSelector(initialState => initialState.gamesGenres)
    genres[0]?.sort()

    //Functions
    const filterBy = (genre) => {
        if(activeFilter.includes(genre)){
            dispatch(removeFilteredGames(genre))
            dispatch(removeFilter(genre))
            }
        else {
            dispatch(addFilter(genre))
            navigate('/filterBy')
        }
    }
    return(
     <ul className={styles.genresBar}>
        {genres[0]?.map((genre) =>{
        return (
            <li key={genre} className={styles.li}>
                <a className={(activeFilter.includes(genre)) ? styles.active : styles.unActive} onClick={() => filterBy(genre)}>{genre}
                    <img className={styles.icon}src={`${arrayOfIcons.shift()}`}/>
                </a>
            </li>)
        })}
     </ul> 
    )
}

export default FilterBar