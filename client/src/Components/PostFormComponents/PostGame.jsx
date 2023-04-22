import { useState, useEffect } from "react"
import styles from './PostGame.module.css'
import { validateDescription, validateGameName,
validateRelease, validateImage, validateStores,
validateDevs, validateGenres, validateTags, sendPost,
validatePlayTime} from "./Functions"
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { getInfo } from '../../Redux/Actions'

function PostGame(){
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
        stores: '',
        developer: '',
        genres: [],
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
        stores: '',
        developer: '',
        genres: '',
        tags:'',
        playtime: '',
    
    })
    function handleSubmit (event) {
        event.preventDefault()
        if(true){ // FALTA VERIFICACION
            sendPost(form, dispatch, getInfo).then(
            navigate('/home')
            )
        }else{
            setLastError('Fill the form')
            return
        }
 
    }

   

    const  onCheck  =  (event) => {
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
            case 'stores': 
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
                <label className={styles.labels} htmlFor="name">Name your game: </label>
                    <input  className={styles.inputs}type='text' value={form?.name} name='name' onChange={handleChange}></input>
                        <p className={styles.errors}>{error.name}</p>
                <label className={styles.labels} htmlFor='description'>Description: </label>
                    <textarea className={styles.inputs} name='description' value={form.description} onChange={handleChange}></textarea>
                        <p className={styles.errors}>{error.description}</p>
                <label className={styles.labels} htmlFor='released'>This will fill automatically</label>
                    <input className={styles.inputs} type='text' name='released' value={form.released} onChange={handleChange}></input>
                        <p className={styles.errors}>{error.released}</p>
                <label className={styles.labels} htmlFor='background_image'>Url image of the game: </label>
                    <input className={styles.inputs} type='text' name='background_image' value={form.background_image} onChange={handleChange} ></input>
                        <p className={styles.errors}>{error.background_image}</p>
                <label className={styles.labels} htmlFor='rating'>This will Start on 0</label>
                    <input className={styles.inputs} type='text' name='rating' onChange={handleChange}/>
                <label className={styles.labels} htmlFor='playtime'>Aprox time of play: </label>
                        <input className={styles.inputs}  value={form.playtime}type='text' name='playtime' onChange={handleChange}></input>
                            <p className={styles.errors}>{error.playtime}</p>
                <label className={styles.labels} htmlFor='stores'>Where can we buy it? </label>
                    <input className={styles.inputs} type='text' name='stores' value={form.stores} onChange={handleChange}></input>
                        <p className={styles.errors}>{error.stores}</p>
                <label className={styles.labels} htmlFor='developer'>Developer or company name: </label>
                    <input className={styles.inputs} type='text' value={form.developer} name='developer' onChange={handleChange}></input>
                        <p className={styles.errors}>{error.developer}</p>
                            <label className={styles.labels} htmlFor='tags'>Add some tags!</label>
                                <input className={styles.inputs}type='text' name='tags' onChange={handleChange}></input>
                                    <p className={styles.errors}>{error.tags}</p>
                        <p>Select a genre</p>
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
            <p className={styles.finalError}>{lastError}</p>
            </div>
        </form>
    )
}

export default PostGame