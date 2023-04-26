import styles from './GameDetail.module.css'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function GameDetail () {
    //Vars and states
    const gameDetail = useSelector(initialState => initialState.gameDetail)
    const platforms = gameDetail.platforms?.slice()
    const tags = gameDetail.tags?.slice()
    const stores = gameDetail?.sotres
    const [platformButton, setPlatformButton] = useState(false)
    const [tagsButton, setTagsButton] = useState(false)
    const [storeButton, setStoreButton] = useState(false)

    //Functions
    const showPlatforms= () => {
        if(!platformButton)setPlatformButton(true)
        else setPlatformButton(false)
    }

    const showStores= () => {
        if(!storeButton)setStoreButton(true)
        else setStoreButton(false)
    }

    const showTags = () => {
        if(!tagsButton) setTagsButton(true)
        else setTagsButton(false)

    }

    return(
        <div className={styles.all}>
            <div  style={{
                            backgroundImage: `url(${gameDetail?.background_image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'initial',
                            height: '60vh',
                            border: '2px solid black'}}>            
            </div>
        <br/>
            <div className={styles.container}>
                <h1 className={styles.gameTitle}>{gameDetail?.name}</h1>
            </div>
            <div className={styles.gameInfo}>
                <h3 className={styles.subTitle}>Release Date:  {gameDetail.released} </h3>
                <h3 className={styles.subTitle}>Rating: {gameDetail.rating}</h3>
                <h3 className={styles.subTitle}>Developer: {gameDetail.developer}</h3>
                <div className={styles.listContainers}>
                    <button onClick={showStores} className={styles.dropdown}>Avaiable on:</button>
                    <button onClick={showPlatforms} className={styles.dropdown}>Play it on: </button>
                    <button className={styles.dropdown} onClick={showTags}>Show Tags</button>
                    {(storeButton) 
                    ?   
                        <ul className={styles.uList}>
                            {gameDetail.stores.map(each =>  <li className={styles.listItems}>{each[0]}</li>)}
                        </ul> 
                    : 
                        <p></p>
                    }
                    {(platformButton) 
                    ?   
                        <ul className={styles.uList}>
                            {platforms.map(each =>  <li className={styles.listItems}>{each}</li>)}
                        </ul> 
                    : 
                        <p></p>
                    }
                    {(tagsButton) 
                    ? 
                        <ul className={styles.uList}>
                            {tags.map((each) => <li className={styles.listItems}>#{each}</li>)}
                        </ul>
                    : 
                        <p></p> 
                    }
                </div>
            </div>
            <p className={styles.description}>Description: {gameDetail.description}</p>
        </div>
    )
}


export default GameDetail