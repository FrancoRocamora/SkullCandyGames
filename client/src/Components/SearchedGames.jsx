import Game from "./HomeComponents/Game"
import { useSelector } from "react-redux"
function SearchedGames(){
 const games = useSelector(initialState => initialState.searchResults)
    console.log(games)
    return(
        <div>
      { games?.map(game => {
        return (
            <Game 
            id={game.id}
            key={game.id}
            name={game.name}
            background_image={game.background_image}
            genres={game.genres}
            rating={game.rating}
            />
        )
       })}
    </div>
    )
}


export default SearchedGames