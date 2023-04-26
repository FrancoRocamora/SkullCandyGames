import { useState, useEffect } from "react"
import styles from './PostGame.module.css'
import { validateDescription, validateGameName,
validateRelease, validateImage, validateStores,
validateDevs, validateGenres, validateTags, sendPost,
validatePlayTime} from "./Functions"
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { getInfo, getError } from '../../Redux/Actions'

function PostGame(){

    //Vars and States
    const dispatch = useDispatch()
    const items = useSelector(initialState => initialState.gamesGenres)
    const navigate = useNavigate()
    const [lastError, setLastError] = useState('')
    const [form, setForm ]= useState({
        name: '',  
        description: '',
        released: '',
        rating: '',
        background_image:'',
        platforms:'',
        developer: '',
        genres: '',
        tags:'',
        playtime: '',
    })
    const [error, setError] = useState({
        name: '',  
        description: '',
        released: '',
        rating: '',
        background_image: '',
        platforms: '',
        developer: '',
        genres: '',
        tags:'',
        playtime: '',
    
    })

    //Functions
    function handleSubmit (event) {
        event.preventDefault()
        const checkForErrors = Object.values(error).map(each => each == '')
        if(!checkForErrors.includes(false)){
        const response = sendPost(form, dispatch, getInfo)
        .then(
               navigate('/success')
        )
        .catch(response => {
            dispatch(getError(response))
            navigate('/error')}
        )
        }else{
            setLastError('Fill the form')
            return
        }
    }

    const  onCheck  = (event) => {
        const property = event.target.name;
        const value = event.target.value
        if(form.genres.includes(value)){
            setForm({...form, [property]: form.genres.filter(genre => genre !== value)})
        } else {
            setForm({...form, [property]: [...form.genres, value]})
        }    
    }

    useEffect(() => {
        validateGenres({...form, genres: [...form.genres]}, error, setError)
    }, [form])
    
    function handleChange(event){
        const property = event.target.name;
        const value = event.target.value
        setForm({...form, [property]: value})
        switch(property){
            case 'name':
                return validateGameName({...form, [property]: value}, error, setError)
            case 'description': 
                return validateDescription({...form, [property]: value}, error, setError)
            case 'released': 
                return validateRelease({...form, [property]: value}, error, setError)
            case 'background_image':
                return  validateImage({...form, [property]: value}, error, setError)
            case 'platforms': 
                return validateStores({...form, [property]: value}, error, setError)
            case 'developer':
                return validateDevs({...form, [property]: value}, error, setError)
            case 'tags': 
            return validateTags({...form, [property]: value}, error, setError)
            case 'playtime': 
            return validatePlayTime({...form, [property]: value}, error, setError)
            default: return
        }
    }
    
    return(
        <form className={styles.form}>
            <div className={styles.container}>
                <label className={styles.labels} htmlFor="name">Name of the game</label>
                    <input  className={styles.inputs}type='text' value={form?.name} name='name' onChange={handleChange}></input>
                        <p className={styles.errors}>{error.name}</p>
                <label className={styles.labels} htmlFor='description'>Description</label>
                    <textarea className={styles.inputs} name='description' value={form.description} onChange={handleChange}></textarea>
                        <p className={styles.errors}>{error.description}</p>
                <label className={styles.labels} htmlFor='released'>Release date</label>
                    <input className={styles.inputs} type='date' name='released' value={form.released} onChange={handleChange}></input>
                        <p className={styles.errors}>{error.released}</p>
                <label className={styles.labels} htmlFor='background_image'>Url image of the game</label>
                    <input className={styles.inputs} type='text' name='background_image' value={form.background_image} onChange={handleChange} ></input>
                        <p className={styles.errors}>{error.background_image}</p>
                <label className={styles.labels} htmlFor='playtime'>Time of gameplay</label>
                        <input className={styles.inputs}  value={form.playtime}type='number' name='playtime' onChange={handleChange}></input>
                            <p className={styles.errors}>{error.playtime}</p>
                <label className={styles.labels} htmlFor='platforms'>Platforms where we can play it</label>
                    <input className={styles.inputs} type='text' name='platforms' value={form.platforms} onChange={handleChange}></input>
                        <p className={styles.errors}>{error.platforms}</p>
                <label className={styles.labels} htmlFor='developer'>Developer or company name</label>
                    <input className={styles.inputs} type='text' value={form.developer} name='developer' onChange={handleChange}></input>
                        <p className={styles.errors}>{error.developer}</p>
                <label className={styles.labels} htmlFor='tags'>Add some tags</label>
                        <input className={styles.inputs}type='text' name='tags' onChange={handleChange}></input>
                                <p className={styles.errors}>{error.tags}</p>
                <p className={styles.labels}>Select a genre</p>
                <p className={styles.errors}>{error.genres}</p>
                <div className={styles.genresContainer}>
                   {items[0].map(genre => {
                       return(
                        <span className={styles.eachGenre}>
                        <label className={styles.labels} htmlFor={`genres`}>{genre}</label>
                        <input className={styles.checkbox} type='checkbox' name={`genres`} value={genre} onChange={onCheck}></input>
                        </span>
                       ) 
                    })}
                </div>
                <button className = {styles.submitBtn}type='submit' onClick={handleSubmit}>Post your game!</button>
                <p className={styles.finalError} className={styles.errors}>{lastError}</p>
            </div>
        </form>
    )
}

export default PostGame