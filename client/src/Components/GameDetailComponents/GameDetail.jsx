import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getGameById } from "../../Redux/Actions"
function GameDetail () {
    const gameDetail = useSelector(initialState => initialState.gameDetail)
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getGameById(id))
    }, [])
    return(
        <div>
            <p>{gameDetail?.name}</p>
            <img src={gameDetail.background_image}/>
            <p>Release Date: {gameDetail.released}</p>
            <p>Rating: {gameDetail.rating}</p>
            <p>Play it on: {gameDetail.platforms}</p>
            <p>Description: {gameDetail.description}</p>
            <p>Devs: {gameDetail.developer}</p>
            <p>Metacritic score:{gameDetail.metacritic}</p>
            <p>Buy it on: {gameDetail.stores}</p>
            <p>Tags: {gameDetail.tags}</p>
        </div>
    )
}


export default GameDetail